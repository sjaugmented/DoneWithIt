import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image} from 'react-native'

import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View 
                style={styles.closeIcon}
                />
            <View 
                style={styles.deleteIcon}
                />
            <Image 
                source={require('../assets/chair.jpg')}
                style={styles.image}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        top: 40,
        left: 30,
        position: 'absolute',
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30,
    },
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
})