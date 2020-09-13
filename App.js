import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  Text, 
  TouchableHighlight, 
  View, 
  Image, 
  Alert, 
  SafeAreaView, 
  Button ,
  Dimensions,
  ImageBackground
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks' 
import WelcomeScreen from './screens/WelcomeScreen'
import ViewImageScreen from './screens/ViewImageScreen'

export default function App() {
  const {landscape} = useDeviceOrientation()

  return (
    <>
      {/* <WelcomeScreen/> */}
      <ViewImageScreen/>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
