import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, Image, Alert, SafeAreaView, Button } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Button 
      color='red'
      title='Click Me' 
      onPress={() => 
        Alert.prompt('My title', 'My message', text => console.log(text))
      } />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
