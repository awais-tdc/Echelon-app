import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    restaurantContainer: {
        margin: 10,
        borderRadius: 10,
    },
    restaurantImage: {
        width: '100%',
        height: 140,
        borderRadius: 10,
    },
    restaurantInfo: {
        flex: 1,
        marginLeft: 10,
    },
    restaurantName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000000",

    },
    restaurantCuisine: {
        fontSize: 16,
        color: "#000000",

    },
    text: {
        marginTop: 20,
        fontSize: 26,
        color: "#000000",
        fontWeight: "bold",
        paddingHorizontal: 15,
        marginBottom: 15,
    }
});
const restaurant1Image = require('../assets/Momento.png');
const restaurant2Image = require('../assets/TasteFood.png');
const restaurant3Image = require('../assets/PizzaTown.png');
const restaurant4Image = require('../assets/pizza2.png');


const restaurants = [
    { id: 1, name: 'EI Momento', cuisine: 'Chinese | Japanese | Thai', image: restaurant1Image },
    { id: 2, name: 'Hot & Taste Fast Food', cuisine: 'Japanese', image: restaurant2Image },
    { id: 3, name: 'Pizza Town', cuisine: 'Chinese | Japanese | Thai', image: restaurant3Image },
    { id: 4, name: 'Chicken Dandori Pizza', cuisine: 'Japanese', image: restaurant4Image },
    { id: 5, name: 'EI Momento', cuisine: 'Chinese | Japanese | Thai', image: restaurant1Image },
    { id: 6, name: 'Hot & Taste Fast Food', cuisine: 'Japanese', image: restaurant2Image },
    { id: 7, name: 'Pizza Town', cuisine: 'Chinese | Japanese | Thai', image: restaurant3Image },
    { id: 8, name: 'Chicken Dandori Pizza', cuisine: 'Japanese', image: restaurant4Image },

];

const Restaurant = () => {
    const navigation = useNavigation();
    const handleRestaurantPress = (restaurantId) => {
        navigation.navigate('ProductDetail', { restaurantId });
    };
    return (
        <View>
            <Text style={styles.text}>Restaurants</Text>
            <ScrollView>
                {restaurants.map(restaurant => (
                    <TouchableOpacity key={restaurant.id} style={styles.restaurantContainer} onPress={() => handleRestaurantPress(restaurant.id)}>
                        <Image source={restaurant.image} style={styles.restaurantImage} />
                        <View style={styles.restaurantInfo}>
                            <Text style={styles.restaurantName}>{restaurant.name}</Text>
                            <Text style={styles.restaurantCuisine}>{restaurant.cuisine}</Text>
                        </View>
                    </TouchableOpacity>

                ))}
            </ScrollView>
        </View>
    )
}

export default Restaurant