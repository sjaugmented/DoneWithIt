import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function RoundedButton({title}) {
    return (
        <Button
            title={title} 
            style={styles.button}

        />
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 70,
        borderRadius: 30,
    }
})