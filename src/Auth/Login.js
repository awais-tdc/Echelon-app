import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import CustomButton from '../Button/CustomButton';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: "#000000",
        width: 230,
        fontWeight: 'bold',
        fontSize: 40,
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
    },
    password: {
        marginTop: 130,
        color: '#000000',
        fontSize: 16,

    }
});

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const handlePress = async () => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify({
                email,
                password,
                role
            }));
            navigation.navigate('Home');
            console.log('Data stored successfully!');
        } catch (error) {
            console.log('Error storing data:', error);
        }
    };

    const handleClick = () => {
        navigation.navigate('ForgetPassword');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Log In</Text>
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
            <Text style={styles.label}>Role</Text>
            <View style={styles.pickerInput}>
                <Picker
                    selectedValue={role}
                    onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
                >
                    <Picker.Item label="User" value="user" />
                    <Picker.Item label="Admin" value="admin" />
                    <Picker.Item label="Rider" value="rider" />
                </Picker>
            </View>
            <View>
                <CustomButton onPress={handlePress} title="Login" />
            </View>
            <Text onPress={handleClick} style={styles.password}>Forget Password ?</Text>
        </View>
    );
};

export default Login;