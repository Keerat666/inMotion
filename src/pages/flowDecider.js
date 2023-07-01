import React from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../components/atoms/primaryButton';
import SecondaryButton from '../components/atoms/secondaryButton';
import { PRIMARY_COLOR, PRIMARY_TEXT_COLOR, SECONDARY_COLOR, SECONDARY_TEXT_COLOR } from '../utils/styles/colors';

const FlowDecider = () => {
  const navigation = useNavigation();

  const handlePassengerButtonPress = () => {
    navigation.navigate('Login', { mode: 'user' });
  };

  const handleDriverButtonPress = () => {
    navigation.navigate('Login', { mode: 'driver' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Image source={require('../assets/images/people.png')} style={styles.centerImage} />
        <Text style={styles.headerText}>Are you a passenger or a driver?</Text>
        <Text style={styles.subheadingText}>You can change this mode later</Text>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton title="Passenger" onPressButton={handlePassengerButtonPress} color={PRIMARY_COLOR} bold={true} />
      </View>
      
      <View style={styles.driverButton}>
        <SecondaryButton title="Driver" onPressButton={handleDriverButtonPress} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: PRIMARY_TEXT_COLOR
  },
  centerContainer: {
    width: '100%',
    height: 300, // Adjust the height as desired
    marginTop: "20%"
  },
  centerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: SECONDARY_TEXT_COLOR,
    marginTop : "10%"
  },
  subheadingText: {
    fontSize: 16,
    color: SECONDARY_TEXT_COLOR,
    textAlign: 'center',
    marginTop : "5%"
  },
  buttonContainer: {
    width: '80%',
    height: 60,
    alignItems: 'center',
    marginTop: "70%",
  },
  driverButton: {
    width: '80%',
    height: 60,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default FlowDecider;
