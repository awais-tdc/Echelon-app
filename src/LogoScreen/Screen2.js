import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import ScreenImg from '../assets/Screen2.png';
import CustomButton from '../Button/CustomButton';
import { useNavigation } from '@react-navigation/native';

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
    width: 230,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  description: {
    color: "#000000",
    width: 200,
    textAlign: 'center',
    paddingTop: 40,
    marginBottom: 90

  },
});

const Screen2 = () => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <Image
        source={ScreenImg}
        style={styles.image}
        resizeMode="full"
      />
      <Text style={styles.heading}>Dine In & Out in fine Restaurants </Text>
      <Text style={styles.description}>Enjoy the yummy food at your door step or at restaurants </Text>
      <View>
        <CustomButton onPress={handlePress} title="Get Started" />
      </View>
    </View>
  );
};

export default Screen2;
