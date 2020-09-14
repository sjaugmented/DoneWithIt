import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  View, 
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks' 
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import {} from '@expo/vector-icons'


export default function App() {
  const {landscape} = useDeviceOrientation()

  return (
    <WelcomeScreen />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
