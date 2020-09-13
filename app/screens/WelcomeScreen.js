import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'

export default function WelcomeScreen() {

    return (
        <ImageBackground
                style={styles.background}
                source={require('../assets/background.jpg')}
            >
                <Image 
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>
                    Sell What You Don't Need
                </Text>
                <View
                    style={styles.loginButton}
                />
                <View
                    style={styles.registerButton}
                />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: "contain",
        position: 'absolute',
        top: 100,
        alignSelf: 'center'
    },
    tagline: {
        position: 'relative',
        top: 200,
        alignSelf: 'center',
        position: 'absolute'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ECDC4'
    }
  });