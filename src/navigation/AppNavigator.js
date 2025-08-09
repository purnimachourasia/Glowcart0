import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
