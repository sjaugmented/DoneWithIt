import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../config/colors'

export default function Button({title}) {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 70,
        borderRadius: 30,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: 'bold'
    }
})