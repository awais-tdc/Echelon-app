import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenImg from '../assets/Screen1.png';
import CustomButton from '../Button/CustomButton';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 380,
    },
    heading: {
        color: "#000000",
        paddingTop: 10,
        width: 300,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    },
    description: {
        color: "#000000",
        width: 210,
        textAlign: 'center',
        paddingTop: 40,
    },
    buttonsContainer: {
        marginTop: 80,
    },
    text: {
        color: "#000000",
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    },
});

const Screen1 = () => {
    const navigation = useNavigation();

    const handlePress1 = () => {
        navigation.navigate('Screen2');
    };
    const handlePress2 = () => {
        navigation.navigate('LogoScreen');
    };

    return (
        <View style={styles.container}>
            <Image
                source={ScreenImg}
                style={styles.image}
                resizeMode="full"
            />
            <Text style={styles.heading}>Customized Loyalty Culinary Delight</Text>
            <Text style={styles.description}>Enjoy personalized rewards and food choices made just for you.</Text>

            <View style={styles.buttonsContainer}>
                <CustomButton onPress={handlePress1} title="Next >" />
                <Text onPress={handlePress2}
                    style={styles.text}>Skip</Text>
            </View>
        </View>
    );
};

export default Screen1;
