import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CustomButton from '../Button/CustomButton';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: "#000000",
        width: 300,
        fontWeight: 'bold',
        fontSize: 36,
        textAlign: 'center',
        marginTop: 150
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 30,
    },
    input: {
        marginTop: 150,
        width: '20%',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    },
});

const Otp = () => {
    const navigation = useNavigation();
    const [otp1, setOtp1] = useState('');
    const [otp2, setOtp2] = useState('');
    const [otp3, setOtp3] = useState('');
    const [otp4, setOtp4] = useState('');
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);

    const handlePress = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>OTP Verification</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    ref={inputRef2}
                    style={styles.input}
                    onChangeText={(text) => {
                        setOtp1(text);
                        if (text.length === 1) inputRef3.current.focus();
                    }}
                    value={otp1}
                    maxLength={1}
                    keyboardType="numeric"
                />
                <TextInput
                    ref={inputRef3}
                    style={styles.input}
                    onChangeText={(text) => {
                        setOtp2(text);
                        if (text.length === 1) inputRef4.current.focus();
                    }}
                    value={otp2}
                    maxLength={1}
                    keyboardType="numeric"
                />
                <TextInput
                    ref={inputRef4}
                    style={styles.input}
                    onChangeText={(text) => {
                        setOtp3(text);
                        if (text.length === 1) inputRef4.current.blur(); 
                    }}
                    value={otp3}
                    maxLength={1}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        setOtp4(text)
                    }}
                    value={otp4}
                    maxLength={1}
                    keyboardType="numeric"
                    // onSubmitEditing={handlePress}
                />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton onPress={handlePress} title="Verify" />
            </View>
        </View>
    );
};

export default Otp;
