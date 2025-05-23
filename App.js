import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerStyle: styles.header, headerTitleStyle: styles.title}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerStyle: styles.header, headerTitleStyle: styles.title}} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
      backgroundColor: '#1E90FF',
  },
  title: {
    color: '#fff'
  }
});



