import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { ModalScreen } from '../screens/ModalScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
        <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
      </Stack.Navigator>
    )
}


