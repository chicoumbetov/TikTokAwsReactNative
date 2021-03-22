import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
//import BirdGame from './src/components/BirdGame';
//import Home from './src/screens/HomeScreen/HomeScreen';
import Navigation from './src/navigation/Navigation';
import { withAuthenticator } from 'aws-amplify-react-native';

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

function App() {
  console.log("App")

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