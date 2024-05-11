import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    backButton: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
    },
    text: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    },
    text1: {
        fontSize: 20,
        color: 'orange',
        fontWeight: 'bold',
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inputContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    inputLabel: {
        flex: 1,
        fontSize: 16,
        color: '#000000'
    },
    input: {
        flex: 2,
        borderBottomWidth: 2,
        borderColor: '#ccc',
        paddingVertical: 10,
    }
});

const cartImage = require('../assets/Momento.png');

const UserDetail = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        retrieveUserData();
    }, []);

    const handleBackPress = () => {
        navigation.navigate('Home');
    };

    const retrieveUserData = async () => {
        try {
            const userDataString = await AsyncStorage.getItem('userData');
            if (userDataString) {
                const userData = JSON.parse(userDataString);
                setName(userData.name || '');
                setEmail(userData.email || '');
                setPassword(userData.password || '');
                setPhone(userData.phone || '');
                setGender(userData.gender || '');
                setAge(userData.age || '');
                console.log('User data retrieved successfully!');
            }
        } catch (error) {
            console.log('Error retrieving user data:', error);
        }
    };

    const handleDonePress = async () => {
        const userData = {
            name,
            email,
            password,
            phone,
            gender,
            age
        };
        try {
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
            console.log('Update data successfully!');
            navigation.navigate('Home');
        } catch (error) {
            console.log('Error update data:', error);
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Icon name="arrow-back" size={26} color="black" />
                </TouchableOpacity>
                <Text style={styles.text}>Edit Profile</Text>
                <TouchableOpacity onPress={handleDonePress}><Text style={styles.text1}>Done</Text></TouchableOpacity>
            </View>
            <View style={styles.avatarContainer}>
                <Image source={cartImage} style={styles.avatar} />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <Text style={styles.inputLabel}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your name"
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.inputLabel}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.inputLabel}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.inputLabel}>Phone:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Phone Number"
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.inputLabel}>Gender:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your gender"
                        value={gender}
                        onChangeText={setGender}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.inputLabel}>Age:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your age"
                        value={age}
                        onChangeText={setAge}
                    />
                </View>
            </View>
        </View>
    );
}

export default UserDetail;
