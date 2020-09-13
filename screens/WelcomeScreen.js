import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'

export default function WelcomeScreen() {

    return (
        <View
            style={styles.container}
        >
            <ImageBackground
                source={require('../app/assets/background.jpg')}
                style={styles.background}
            >
                <Image 
                    source={require('../app/assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>
                    Sell What You Don't Need
                </Text>
                <View
                    style={styles.login}
                />
                <View
                    style={styles.register}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    background: {
        resizeMode: 'cover',
        flex: 1,
        flexDirection: 'column',
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
        top: 100,
        alignSelf: 'center'
    },
    login: {
        height: '8%',
        backgroundColor: '#fc5c65'
    },
    register: {
        height: '8%',
        backgroundColor: '#4ECDC4'
    }
  });