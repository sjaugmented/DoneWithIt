import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image} from 'react-native'

export default function ViewImageScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topbar}>
                <View 
                    style={styles.close}
                />
                <View 
                    style={styles.delete}
                />
            </View>
            <Image 
                source={require('../app/assets/chair.jpg')}
                style={styles.image}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    topbar: {
        flex: 1,
        justifyContent: 'center',
    },
    close: {
        width: 100,
        height: 100,
        backgroundColor: '#fc5c65',
        left: '5%'
    },
    delete: {
        width: 100,
        height: 100,
        backgroundColor: '#4ECDC4',
        left: '70%'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
})