import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/pages/splash';
import {NavigationContainer} from '@react-navigation/native';
import FlowDecider from './src/pages/flowDecider';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{title: 'Splash',headerShown: false}} />
        <Stack.Screen name="FlowDecider" component={FlowDecider} options={{title: 'Flow',headerShown: false}} />

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
