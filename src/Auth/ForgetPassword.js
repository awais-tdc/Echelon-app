import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
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
        marginBottom: 50,
        marginTop: 100
    },
    input: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: "80%",
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
        alignSelf: 'flex-start',
        color: "#000000",
        marginBottom: 5,
        marginLeft: 40
    },
    pickerInput: {
        height: 55,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        width: "80%",
        borderRadius: 10,
    }
});

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        navigation.navigate('Login')
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Reset Password</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Re-enter Password"
                secureTextEntry={true}
            />
            <View>
                <CustomButton onPress={handlePress} title="Confirm Password" />
            </View>
        </View>
    );
};

export default Login;
