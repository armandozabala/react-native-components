import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import { Text } from 'react-native';
import { Platform } from 'react-native';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';

import { HeaderTitle } from '../components/HeaderTitle'
import { useForm } from '../hooks/useForm';

export const TextInputScreen = () => {

    const { form, onChange, isSubscribe } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribe: false
    });



    return (
        <KeyboardAvoidingView
             behavior={Platform.OS === "ios" ? "padding" : "height"}
        > 
        <ScrollView> 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{marginHorizontal: 20}}>
            <HeaderTitle title='Text Input'/>
            
            <TextInput
                style={stylesScreen.inputStyle}
                placeholder='Su nombre'
                autoCorrect = {false}
                autoCapitalize = "words"
                onChangeText = { (value) => onChange(value, 'name') }
            />

            <TextInput
                style={stylesScreen.inputStyle}
                placeholder='Su email'
                autoCorrect = {false}
                autoCapitalize = "none"
                onChangeText = { (value) => onChange(value, 'email') }
                keyboardType="email-address"
            />

            <View style={stylesScreen.switchRow}>
                <Text style={stylesScreen.switchText}>Subscribe</Text>
                <CustomSwitch isOn={ isSubscribe } onChange={ (value) => onChange(value, 'isSubscribe') } />
            </View>
           

            <HeaderTitle title={ JSON.stringify(form,null, 3) }/>
                        

            <HeaderTitle title={ JSON.stringify(form,null, 3) }/>
                        

            <TextInput
                style={stylesScreen.inputStyle}
                placeholder='Su phone'
                keyboardType="phone-pad"
                onChangeText = { (value) => onChange(value, 'phone') }
            />

            <View style={{ height: 100}}/>
        </View>
     
        </TouchableWithoutFeedback>
        </ScrollView>
       
        </KeyboardAvoidingView>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle:{
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 10
    },
    switchRow:{
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         marginVertical: 10
    },
    switchText: {
         fontSize: 25
    }
});