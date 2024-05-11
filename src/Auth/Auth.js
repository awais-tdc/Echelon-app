import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CustomButton from '../Button/CustomButton';
import AuthImg from "../assets/auth.png";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 50
    },
    image: {
        width: 300,
        height: 380,
    },
});

const Auth = () => {
    const navigation = useNavigation();

    const handlePress1 = () => {
        navigation.navigate('Login');
    };
    const handlePress2 = () => {
        navigation.navigate('Signup');
    };
    return (
        <View style={styles.container}>
            <Image
                source={AuthImg}
                style={styles.image}
                resizeMode="contain"
            />
            <View>
                <CustomButton onPress={handlePress1} title="Login" />
                <CustomButton onPress={handlePress2} title="Signup" />
            </View>
        </View>
    );
};

export default Auth;
