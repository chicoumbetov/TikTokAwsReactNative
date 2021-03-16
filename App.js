import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Home/>
        <Text>Open up App.js to start working on your app!</Text>
      </SafeAreaView>
      
      <StatusBar style="auto" />
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
