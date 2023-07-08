import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, StatusBar, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../components/atoms/primaryButton';
import { loginAPI } from '../service/login';
import { HINT_AND_PLACEHOLDER, PRIMARY_COLOR, PRIMARY_COLOR_LIGHT, PRIMARY_TEXT_COLOR, SECONDARY_TEXT_COLOR, TERMS_AND_CONDITIONS } from '../utils/styles/colors';

const Login = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { mode } = route.params; // Fetching the mode from route.params

  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Set the status bar style to dark-content
    StatusBar.setBarStyle('dark-content');
    console.log(mode)
  }, []);

  const handlePhoneNumberChange = (value) => {
    if (value.length < 10) {
      setPhoneNumber(value);
    } else if (value.length === 10) {
      setPhoneNumber(value);
      Keyboard.dismiss();
    }
  };

  const triggerLogin = async () => {
    if (phoneNumber.length === 10) {
      const res = await loginAPI(phoneNumber, mode); // Pass the mode to the loginAPI function
      console.log(res);
      if (res.err === "id not found") {
        alert("Id with phone number : " + phoneNumber + " does not exist!")
        setPhoneNumber("")
      } else if (res.err === "") {
        if (mode === "driver")
          navigation.navigate('DriverTab', { data: res.data })
        else if(mode === "user")
          navigation.navigate('UserDashboard', { data: res.data })


      }
    } else {
      alert("Please enter a valid number :(")
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Enter your phone number to sign in</Text>
        <View style={styles.rowContainer}>
          <Image source={require('../assets/images/indian-flag.png')} style={styles.flagImage} />
          <Text style={styles.stdCode}>+91</Text>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="Your cellphone number"
            placeholderTextColor={HINT_AND_PLACEHOLDER}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Next" onPressButton={triggerLogin} color={PRIMARY_COLOR_LIGHT} bold={false} />
        </View>
        <Text style={styles.subheadingText}>By tapping "Next", you agree to Terms and Conditions and the Privacy Policy</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: SECONDARY_TEXT_COLOR
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: PRIMARY_TEXT_COLOR,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  flagImage: {
    width: 24,
    height: 16,
    marginRight: 10,
  },
  phoneNumberInput: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    borderColor: HINT_AND_PLACEHOLDER,
    paddingHorizontal: 10,
  },
  buttonContainer: {
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
  stdCode: {
    fontWeight: 'bold',
  },
});

export default Login;
