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
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'

export default function App() {
  const {landscape} = useDeviceOrientation()

  return (
    <View
      style={styles.container}
    >
      <View
        style={{
          backgroundColor: '',
          width: 100,
          height: 100,
          
        }}
      > 

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
