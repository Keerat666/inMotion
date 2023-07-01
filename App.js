import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PrimaryButton from './src/components/atoms/primaryButton';
import SecondaryButton from './src/components/atoms/secondaryButton';
import Splash from './src/pages/splash';
import OtherPage from './src/pages/otherPage';

const Stack = createStackNavigator();

export default function App() {
  const handleButtonPress = () => {
    // Button press logic
    alert('Hi');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Splash} />
        <Stack.Screen name="OtherPage" component={OtherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
