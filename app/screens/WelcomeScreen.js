import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'
import AppButton from '../components/AppButton'

export default function WelcomeScreen() {

    return (
        <ImageBackground
                style={styles.background}
                source={require('../assets/background.jpg')}
            >
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../assets/logo-red.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.tagline}>
                        Sell What You Don't Need
                    </Text>
                </View>
                <AppButton 
                    title="Login"
                    color
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
        alignItems: 'center' // same as alignSelf on a child, centers all items 
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: "contain",
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    tagline: {
        top: 10,
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