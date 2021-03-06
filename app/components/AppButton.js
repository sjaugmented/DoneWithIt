import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

export default function AppButton({title, onPress, color}) {
    return (
        <TouchableOpacity 
            style={[styles.button, {backgroundColor: color}]}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        borderRadius: 30,
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