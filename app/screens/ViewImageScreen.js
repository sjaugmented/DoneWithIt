import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name='close' color='white' size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name='trash-can-outline' color='white' size={35} />
            </View>
            <Image 
                source={require('../assets/chair.jpg')}
                style={styles.image}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        top: 40,
        left: 30,
        position: 'absolute',
    },
    deleteIcon: {
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