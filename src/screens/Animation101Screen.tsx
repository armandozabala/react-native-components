import React, { useRef } from 'react'
import { View, StyleSheet, Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const  { opacity, position, startMoving, fadeIn, fadeOut } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{...styles.purpleBox,
                          opacity: opacity,
                          transform:[{
                                translateX: position
                          }]
                        }}/>

            <Button
                title="fadeIn"
                onPress={() => { 
                                 fadeIn(); 
                                 startMoving(-100)
                }}
            />

<Button
                title="fadeOut"
                onPress={fadeOut}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox:{
        backgroundColor: '#6638F0',
        width: 150,
        height: 150
    }
})