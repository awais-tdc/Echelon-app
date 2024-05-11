import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginVertical: 5,
    },
    productInfo: {
        marginLeft: 10,
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
    },
    deleteIcon: {
        marginLeft: 'auto',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
    },
    text: {
        fontSize: 20,
        color: '#000000',
        marginHorizontal: 120,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

const cartImage = require('../assets/Momento.png');
const cartImage2 = require('../assets/TasteFood.png');
const cartImage3 = require('../assets/PizzaTown.png');


const Cart = () => {
    const navigation = useNavigation();
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'EI Momento', price: '470', image: cartImage },
        { id: 2, name: 'Hot & Taste Fast Food', price: '750', image: cartImage2 },
        { id: 3, name: 'Chicken Tikka Pizza', price: '800', image: cartImage3 },
    ]);

    const handleDelete = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const handleBackPress = () => {
        navigation.navigate('ProductDetail')
    };

    return (
        <View style={styles.container}>
            <View style={styles.backButton}>
                <TouchableOpacity onPress={handleBackPress}>
                    <Icon name="arrow-back" size={26} color="black" />
                </TouchableOpacity>
                <Text style={styles.text}>Items Cart</Text>
            </View>
            {cartItems.map(item => (
                <View key={item.id} style={styles.card}>
                    <Image source={item.image} style={{ width: 100, height: 70, borderRadius: 5 }} />
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>Rs.{item.price}</Text>
                    </View>
                    <TouchableOpacity style={styles.deleteIcon} onPress={() => handleDelete(item.id)}>
                        <Icon name="close" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
}

export default Cart;
