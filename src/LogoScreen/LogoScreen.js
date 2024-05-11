import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import LogoImage from '../assets/logo.png';
import { useNavigation, useIsFocused } from '@react-navigation/native'; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 360,
        height: 344,
    },
});

function LogoScreen() {
    const navigation = useNavigation();
    const isFocused = useIsFocused(); 

    useEffect(() => {
        if (isFocused) { 
            const timer = setTimeout(() => {
                navigation.navigate('Screen1');
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [navigation, isFocused]);

    return (
        <View style={styles.container}>
            <Image
                source={LogoImage}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

export default LogoScreen;
