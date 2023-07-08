import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/pages/splash';
import {NavigationContainer} from '@react-navigation/native';
import FlowDecider from './src/pages/flowDecider';
import Login from './src/pages/login';
import DriverTabView from './src/pages/driverTabView';
import UserDashboard from './src/pages/userDashboard';
import FindRide from './src/pages/findRide';
import QRScanner from './src/pages/scanQR';
import BookCab from './src/pages/bookCab';
import RideBookedScreen from './src/pages/rideBooked';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{title: 'Splash',headerShown: false}} />
        <Stack.Screen name="FinalizeRide" component={BookCab} options={{title: 'FinalCab',headerShown: false}} />
        <Stack.Screen name="CabBooked" component={RideBookedScreen} options={{title: 'CabBooked',headerShown: false}} />

        <Stack.Screen name="BookCab" component={FindRide} options={{title: 'BookCab',headerShown: false}} />
        <Stack.Screen name="ScanQR" component={QRScanner} options={{title: 'QRscanner',headerShown: false}} />
        <Stack.Screen name="FindRide" component={FindRide} options={{title: 'FindRide',headerShown: false}} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} options={{title: 'UserDashboard',headerShown: false}} />
        <Stack.Screen name="FlowDecider" component={FlowDecider} options={{title: 'Flow',headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{title: 'Login',headerShown: false}} />
        <Stack.Screen
          name="DriverTab"
          component={DriverTabView}
          options={{title: 'DriverTab',headerShown: true}}
        />
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
