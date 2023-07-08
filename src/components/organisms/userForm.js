import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image, TextInput, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import { HINT_AND_PLACEHOLDER, PRIMARY_COLOR_LIGHT, SECONDARY_COLOR, SECONDARY_TEXT_COLOR } from '../../utils/styles/colors';
import PrimaryButton from '../atoms/primaryButton';
import { useNavigation, useRoute } from '@react-navigation/native';

const UserForm = (props) => {
  const navigation = useNavigation();
  useEffect(() => {
    // Set the status bar style to dark-content
    StatusBar.setBarStyle('dark-content');
  }, []);

  const findRide = () => {

    alert("Trigger Find Ride.")
    console.log(props.data)
  }

  const handleWalkToCab = () => {
    // Perform actions when "Walk to Cab" button is pressed
    console.log("Walk to Cab button pressed");
    const messages = [
        "Choosing to walk to your cab, not only saves money, but benefits the environment, and adds a healthy dose of daily activity.",
        "Walking to your cab not only saves money but also benefits the environment and adds a healthy dose of daily activity.",
        "Opting to walk to your cab not just saves money but also contributes to the environment and keeps you active.",
        "By choosing to walk to your cab, you're not only saving money but also making a positive impact on the environment and getting your daily exercise.",
        "When you choose to walk to your cab, you save money, help the environment, and get your daily workout all at once.",
        "Walking to your cab is a triple win: saving money, protecting the environment, and getting your daily exercise in one go."
      ];
    
      const randomIndex = Math.floor(Math.random() * messages.length);
      alert(messages[randomIndex])
      navigation.navigate('BookCab', { data: props.data })

  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/images/car.png')} style={styles.buttonImage} />
            <Text style={styles.subtitle}>Car AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/images/car.png')} style={styles.buttonImage} />
            <Text style={styles.subtitle}>Car NonAC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/images/bike.png')} style={styles.buttonImage} />
            <Text style={styles.subtitle}>Bike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleWalkToCab}>
  <Image source={require('../../assets/images/nearMe.png')} style={styles.buttonImage} />
  <Text style={styles.subtitle}>Instant Ride</Text>
</TouchableOpacity>

        </View>

        <View style={styles.row}>
          <Image source={require('../../assets/images/blue.png')} style={styles.flagIcon} />
          <TextInput style={styles.input} placeholder="From" placeholderTextColor={HINT_AND_PLACEHOLDER} />
        </View>

        <View style={styles.row}>
          <Image source={require('../../assets/images/green.png')} style={styles.flagIcon} />
          <TextInput style={styles.input} placeholder="To" placeholderTextColor={HINT_AND_PLACEHOLDER} />
        </View>

        <View style={styles.row}>
          <Image source={require('../../assets/images/rupee.png')} style={styles.flagIcon} />
          <TextInput
            style={styles.input}
            placeholder="Offer your fare"
            keyboardType="numeric"
            placeholderTextColor={HINT_AND_PLACEHOLDER}
          />
        </View>

        <View style={styles.row}>
          <Image source={require('../../assets/images/comments.png')} style={styles.flagIcon} />
          <TextInput style={styles.input} placeholder="Option and comments" placeholderTextColor={HINT_AND_PLACEHOLDER} />
        </View>

        <View style={styles.buttonContainer2}>
          <PrimaryButton title="Find Driver" onPressButton={findRide} color={PRIMARY_COLOR_LIGHT} bold={false} />
        </View>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: SECONDARY_TEXT_COLOR
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    width: '23%',
    aspectRatio: 1,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonImage: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  flagIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  buttonContainer2: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    marginTop: 10,
  },
});

export default UserForm;
