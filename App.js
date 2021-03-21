import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
//import BirdGame from './src/components/BirdGame';
//import Home from './src/screens/HomeScreen/HomeScreen';
import Navigation from './src/navigation/Navigation';

export default function App() {
  console.log("App")
  
  return (
    <View style={styles.container}>
      {/*<SafeAreaView>*/}
        <Navigation/>
        {/*
        Another test app game
        <BirdGame/>
        */}
      {/*</SafeAreaView>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});