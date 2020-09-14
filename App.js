import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  View, 
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks' 
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import Card from './app/components/Card'
import {} from '@expo/vector-icons'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';


export default function App() {
  const {landscape} = useDeviceOrientation()

  return (
    <ViewImageScreen/>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100,
  },
});
