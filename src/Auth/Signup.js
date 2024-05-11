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
        fontSize: 34,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: "80%",
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
        marginLeft: 45,
        alignSelf: 'flex-start',
        color: "#000000",
        marginBottom: 5,
    },
    pickerInput: {
        height: 55,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        width: "80%",
        borderRadius: 10,
    }
});

const Signup = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');

    const handlePress = async () => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify({
                name,
                email,
                phone,
                gender,
                age,
                password,
                role
            }));
            console.log('Data stored successfully!');
            navigation.navigate('Otp');
        } catch (error) {
            console.log('Error storing data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Sign Up</Text>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Name"
            />
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
            <Text style={styles.label}>Phone No</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPhone}
                value={phone}
                placeholder="Phone"
                keyboardType="phone-pad"
            />
            <Text style={styles.label}>Gender</Text>
            <View style={styles.pickerInput}>
                <Picker
                    selectedValue={gender}
                    onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                >
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>
            </View>
            <Text style={styles.label}>Age</Text>
            <TextInput
                style={styles.input}
                onChangeText={setAge}
                value={age}
                placeholder="Age"
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
                <CustomButton onPress={handlePress} title="Sign Up" />
            </View>
        </View>
    );
};

export default Signup;
