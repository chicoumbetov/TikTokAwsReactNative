import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BirdGame from './src/components/BirdGame';
//import Home from './src/screens/Home/Home';

export default function App() {
  
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/*
          <Home/>
        */}
        <BirdGame/>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});