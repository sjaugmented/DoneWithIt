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
import AppText from './app/components/AppText'
import {} from '@expo/vector-icons'

export default function App() {
  const {landscape} = useDeviceOrientation()

  return (
    <View
      style={styles.container}
    >
      <AppText
        style={{
          fontSize: 30,
          fontFamily: 'Avenir Next',
          fontWeight: '600',
          color: 'tomato',
          textTransform: "capitalize",
          textAlign: 'center',
        }}
      >I love React Native!</AppText>

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
