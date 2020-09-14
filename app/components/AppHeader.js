import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AppHeader({children}) {
    return <Text style={styles.header}>{children}</Text>
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontFamily: 'Avenir Next',
        fontWeight: 'bold',
    }
})