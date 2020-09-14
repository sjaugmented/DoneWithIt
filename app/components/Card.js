import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppText from './AppText'

export default function Card({title, subtitle, image}) {
    return (
        <View style={styles.card}>
            <Image 
                style={styles.image}
                source={image}
            />
            <AppText>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {

    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: ''
    },
    subtitle: {

    }
})