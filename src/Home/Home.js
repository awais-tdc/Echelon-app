import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Restaurant from '../Restaurant/Restaurant';
import Cart from '../Cart/Cart';
import UserDetail from '../User/UserDetail';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        marginTop: 15
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    searchBar: {
        backgroundColor: '#F0F0F0',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 20,
        borderRadius: 10,
    },
    searchInput: {
        fontSize: 16,
        paddingHorizontal: 10,
        borderRadius: 25,
        height: 50,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        elevation: 2,
    },
    restaurantContainer: {
        margin: 10,
        borderRadius: 10,
    },
    restaurantImage: {
        width: '100%',
        height: 120,
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
    productRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    productContainer: {
        width: '25%',
        alignItems: 'center',
        marginVertical: 8,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    productName: {
        textAlign: 'center',
        color: "#000000",

    },
    text: {
        fontSize: 20,
        color: "#000000",
        fontWeight: "bold",
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 15,
    }
});

const restaurant1Image = require('../assets/Momento.png');
const restaurant2Image = require('../assets/TasteFood.png');
const restaurant3Image = require('../assets/PizzaTown.png');

const product1Image = require('../assets/pizza.png');
const product2Image = require('../assets/burger.png');
const product3Image = require('../assets/pasta.png');
const product4Image = require('../assets/salad.png');
const product5Image = require('../assets/biryani.png');
const product6Image = require('../assets/icecream.png');
const product7Image = require('../assets/sandwich.png');
const product8Image = require('../assets/soup.png');



const product = [
    { id: 1, name: 'Pizza', image: product1Image },
    { id: 2, name: 'Burger', image: product2Image },
    { id: 3, name: 'Pasta', image: product3Image },
    { id: 4, name: 'Salad', image: product4Image },
    { id: 5, name: 'Biryani', image: product5Image },
    { id: 6, name: 'Ice-cream', image: product6Image },
    { id: 7, name: 'Sandwich', image: product7Image },
    { id: 8, name: 'Soup', image: product8Image },


]

const restaurants = [
    { id: 1, name: 'EI Momento', cuisine: 'Chinese | Japanese | Thai', image: restaurant1Image },
    { id: 2, name: 'Hot & Taste Fast Food', cuisine: 'Japanese', image: restaurant2Image },
    { id: 3, name: 'Pizza Town', cuisine: 'Chinese | Japanese | Thai', image: restaurant3Image },
    { id: 4, name: 'Hot & Taste Fast Food', cuisine: 'Japanese', image: restaurant2Image },

];

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    const navigation = useNavigation();
    const handleProductPress = (productId) => {
        navigation.navigate('Restaurant', { productId });
    };
    const handleRestaurantPress = (restaurantId) => {
        navigation.navigate('ProductDetail', { restaurantId });
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" size={26} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Home</Text>
                <TouchableOpacity onPress={() => console.log("User pressed")}>
                    <Icon name="person-circle-outline" size={26} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.searchBar}>
                <TextInput
                    placeholder="Search for restaurants or dishes"
                    style={styles.searchInput}
                />
            </View>
            <View style={styles.productRow}>
                {product.map(Product => (
                    <TouchableOpacity key={Product.id} style={styles.productContainer} onPress={() => handleProductPress(Product.id)}>
                        <Image source={Product.image} style={styles.productImage} />
                        <Text style={styles.productName}>{Product.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.text}>Restaurants to Explore </Text>
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
    );
}

const HomeTabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    )
                }}
            />
             <Tab.Screen
                name="Restaurant"
                component={Restaurant}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="restaurant" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="cart" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Me"
                component={UserDetail}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}



const Home = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeTabScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default Home;

