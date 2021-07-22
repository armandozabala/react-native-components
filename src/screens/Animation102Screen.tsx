import React from 'react'
import { View, StyleSheet } from 'react-native';

export const Animation102Screen = () => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.purpleBox}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    purpleBox:{
        backgroundColor: '#FA6D02',
        width: 150,
        height: 150
    }
})