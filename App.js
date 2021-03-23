import 'react-native-gesture-handler';
import * as React from 'react';
import { useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
//import BirdGame from './src/components/BirdGame';
//import Home from './src/screens/HomeScreen/HomeScreen';
import Navigation from './src/navigation/Navigation';

import { Auth, API, graqlOperation, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import { createUser } from './src/graphql/mutations'
import { getUser } from './src/graphql/queries';

import Amplify from 'aws-amplify'
import config from './src/aws-exports'

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
];

const getRandomImage = () => {
  return randomImages[Math.floor( Math.random() * randomImages.length )]
}

Amplify.configure({ 
  ...config,
  Analytics: {
    disabled: true,
  }
})

function App() {
  console.log("App")

  useEffect(() => {
    const fetchUser = async () => {
      //get currently authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })
      //console.log(userInfo)     //Cognito User info

      if (!userInfo) {
        return;
      }
      //check if the user exist in the database
      const getUserResponse = await API.graphql(
        graphqlOperation(
          getUser,
          { id: userInfo.attributes.sub}
        )
      )

      if (getUserResponse.data.getUser) {
        console.log("User already exists in database");
        return;
      }

      // if it doesn't (it's newly registered user)
      // then, create a new user in database
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        
        imageUri: getRandomImage(),
      };
      console.log(newUser)

      //send newUser to API
      await API.graphql(
        graphqlOperation(
          createUser,
          { input: newUser }
        )
      )
    }

    fetchUser();
  }, [])

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'black',
    }}>
      <Navigation />
      {/*
        Another test app game
        <BirdGame/>
        */}
    </View>
  );
}

export default withAuthenticator(App)