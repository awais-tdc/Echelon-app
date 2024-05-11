import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './src/LogoScreen/LogoScreen';
import Screen1 from './src/LogoScreen/Screen1';
import Screen2 from './src/LogoScreen/Screen2';
import Auth from './src/Auth/Auth';
import Signup from './src/Auth/Signup';
import Login from './src/Auth/Login';
import ForgetPassword from './src/Auth/ForgetPassword';
import Otp from './src/Auth/Otp';
import Home from './src/Home/Home';
import Restaurant from './src/Restaurant/Restaurant';
import ProductDetail from './src/Restaurant/ProductDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogoScreen" component={LogoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Restaurant" component={Restaurant} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

