import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
//import BirdGame from './src/components/BirdGame';
//import Home from './src/screens/HomeScreen/HomeScreen';
import Navigation from './src/navigation/Navigation';

import { Auth, API, graqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';

import { createUser } from './src/graphql/mutations'

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { useEffect } from 'react';
Amplify.configure(config)

function App() {
  console.log("App")

  useEffect(() => {
    const fetchUser = async () => {
      //get currently authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })
      console.log(userInfo)

      //check if the user exist in the database

      // if it doesn't (it's newly registered user)
      // then, create a new user in database
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