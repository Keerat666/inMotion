import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/atoms/primaryButton';
import SecondaryButton from '../components/atoms/secondaryButton';

import { PRIMARY_COLOR_LIGHT, TERMS_AND_CONDITIONS } from '../utils/styles/colors';
import { useNavigation, useRoute } from '@react-navigation/native';

const FindRide = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();

    const scanQR = () => {
        console.log(data)
        navigation.navigate('ScanQR', { data: data })
      }

      useEffect(() => {
        // Set the status bar style to dark-content
        StatusBar.setBarStyle('dark-content');
      }, []);

  return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Nearest Ride found at : </Text>
      <Text style={styles.subheadingText}>After reaching the ride, please scan the QR to proceed : </Text>
      <Image source={require('../assets/images/map.jpg')} style={styles.image} />
      <View style={styles.buttonContainer2}>
          <PrimaryButton title="Scan QR" onPressButton={scanQR} color={PRIMARY_COLOR_LIGHT} bold={true} />
        </View>
        <View style={styles.buttonContainer2}>
          <SecondaryButton title="Share Ride Details" color={PRIMARY_COLOR_LIGHT} bold={true} />
        </View>
      </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    marginTop: 20
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  buttonContainer2: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    marginTop: 10,
  },
  subheadingText: {
    fontSize: 14,
    marginTop: 10,
    color: TERMS_AND_CONDITIONS,
  },
});

export default FindRide;
