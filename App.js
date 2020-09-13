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

export default function App() {
  const {landscape} = useDeviceOrientation()

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row', // horizontal
        justifyContent: 'center', // primary axis
        alignItems: 'center', // secondary axis
        alignContent: 'center',
        // flexWrap: 'wrap'
      }}
    >
      <ImageBackground
        source={require('./assets/background.jpg')}
      >

      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
