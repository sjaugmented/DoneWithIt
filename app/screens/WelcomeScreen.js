import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'
import AppButton from '../components/AppButton'
import AppHeader from '../components/AppHeader'

import colors from '../config/colors'

export default function WelcomeScreen() {

    return (
        <ImageBackground
                style={styles.background}
                source={require('../assets/background.jpg')}
                blurRadius={10}
            >
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../assets/logo-red.png')}
                        style={styles.logo}
                    />
                    <View style={styles.tagline}>
                        <AppHeader >
                            Sell What You Don't Need
                        </AppHeader>
                    </View>
                </View>
                <View style={styles.loginButton}>
                    <AppButton 
                        title="Login"
                        color={colors.primary}
                    />
                </View>
                <View style={styles.registerButton}>
                    <AppButton 
                        title="Register"
                        color={colors.secondary}
                    />
                </View>
                
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center', // same as alignSelf on a child, centers all items 
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
        paddingTop: 20,
        fontSize: 24,
    },
    loginButton: {
        width: '90%',
        position: 'absolute',
        bottom: 100
    },
    registerButton: {
        width: '90%',
        position: 'absolute',
        bottom: 30
    }
  });