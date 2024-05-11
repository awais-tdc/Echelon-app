import React, { useState } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    backButton: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        color: '#00000',
        marginHorizontal: 10,
    },
    productContainer: {
        marginBottom: 20,
    },
    productImage: {
        width: '100%',
        height: 170,
    },
    productInfo: {
        marginHorizontal: 15,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000000",
        marginTop: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginHorizontal: 15
    },
    Info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detail: {
        color: "#000000",
        fontSize: 18,
        marginTop: 10,
        marginHorizontal: 15,
    },
    ViewInfo: {
        marginHorizontal: 15
    },
    delivery: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000000",
        marginTop: 10,
        marginBottom: 15
    },
    checkBoxContainer: {
        marginHorizontal: -15,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -15,
    },
    extraItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    addToCartButton: {
        backgroundColor: '#008080',
        borderRadius: 5,
        paddingVertical: 10,
        marginHorizontal: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    addToCartButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

const ProductDetail = ({ navigation }) => {
    const [isCheckedCrust, setIsCheckedCrust] = useState(false);
    const [isCheckedCheese2, setIsCheckedCheese2] = useState(false);
    const [isCheckedCheese, setIsCheckedCheese] = useState(false);
    const [isCheckedFries, setIsCheckedFries] = useState(false);
    const [isCheckedDrink, setIsCheckedDrink] = useState(false);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleAddToCart = () => {
        navigation.navigate('Cart'); 
    };

    const product = {
        id: 1,
        name: 'Large Chicken Tikka Pizza',
        description: 'Made in Creamy Chaska Sauce, Malai Boti Chicken , Onion, Mushroom, Tomato',
        image: require('../assets/PizzaTown.png'),
        price: '1350'
    };

    return (
        <ScrollView contentContainerStyle={styles.container} >
            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                <Icon name="arrow-back" size={26} color="black" />
                <Text>Back</Text>
            </TouchableOpacity>
            <View style={styles.productContainer}>
                <TouchableOpacity>
                    <Image source={product.image} style={styles.productImage} />
                </TouchableOpacity>
                <View style={styles.Info}>
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{product.name}</Text>
                    </View>
                    <Text style={styles.detail}>Rs.{product.price}</Text>
                </View>
                <Text style={styles.description}>{product.description}</Text>
            </View>
            <View style={styles.ViewInfo}>
                <Text style={styles.productName}>Choose the crust</Text>
                <Text style={styles.delivery}>Delivery Time </Text>
                <View >
                    <View style={styles.checkBoxContainer}>
                        <CheckBox
                            checked={isCheckedCrust}
                            onPress={() => setIsCheckedCrust(!isCheckedCrust)}
                        />
                        <Text>Deep Pan (Signature)</Text>
                    </View>
                    <View style={styles.checkBoxContainer} >
                        <CheckBox
                            checked={isCheckedCheese2}
                            onPress={() => setIsCheckedCheese2(!isCheckedCheese2)}
                        />
                        <Text>New York Style</Text>
                    </View>
                    <View style={styles.checkBoxContainer}>
                        <CheckBox
                            checked={isCheckedCheese}
                            onPress={() => setIsCheckedCheese(!isCheckedCheese)}
                        />
                        <Text>Thin and crispy </Text>
                    </View>
                </View>
                <Text style={styles.productName}>Frequently bought together  </Text>
                <View style={styles.extraItem}>
                    <View style={styles.checkBoxContainer}>
                        <CheckBox
                            checked={isCheckedFries}
                            onPress={() => setIsCheckedFries(!isCheckedFries)}
                        />
                        <Text>Fries</Text>
                    </View>
                    <View><Text>+Rs.250</Text></View>
                </View>
                <View style={styles.extraItem}>
                    <View style={styles.checkBoxContainer}>
                        <CheckBox
                            checked={isCheckedDrink}
                            onPress={() => setIsCheckedDrink(!isCheckedDrink)}
                        />
                        <Text>Drink</Text>
                    </View>
                    <View><Text>+Rs.250</Text></View>
                </View>
            </View>
            <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default ProductDetail;
