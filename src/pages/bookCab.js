import React, { useState, useEffect } from "react"

import { View, TouchableOpacity, Image, TextInput, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native';
import { HINT_AND_PLACEHOLDER, PRIMARY_COLOR_LIGHT, SECONDARY_COLOR, SECONDARY_TEXT_COLOR } from "../utils/styles/colors";
import { useNavigation, useRoute } from '@react-navigation/native';
import PrimaryButton from "../components/atoms/primaryButton";

const BookCab =(props)=>{
  const [pickup, setPickup] = React.useState('');
  const [drop, setDrop] = React.useState('');
  const [mobile, setMobile] = React.useState('');

  const [driverName, setDriverName] = React.useState('');
  const [autoNumber, setautoNumber] = React.useState('');

  const navigation = useNavigation();
  useEffect(() => {
    // Set the status bar style to dark-content
    StatusBar.setBarStyle('dark-content');
  }, []);

useEffect(() => { 
  // here is where you make API call(s) or any side effects
  setMobile(props.route.params.userMobile)
  fetch(
    "https://rideassist.onrender.com/api/v1/drivers/DriverByID?_id="+props.route.params.driverID)
                .then((res) => res.json())
                .then((json) => {

                  console.log(json.full_name)
                    setDriverName(json.full_name)
                    setautoNumber(json.auto_number)
                })
}, [] )

const initiateTrip=()=>{

  if(pickup==="" || drop==="")
  {
    alert('Please fill all the fields.')

  }
  else
  {
    //trigger initiate trip api

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let data = {"pickup_point":  pickup,"drop_point": drop,"pickup_coordinates": "test","drop_coordinates": "test2","user_mobile": mobile,"driver_id": props.route.params.driverID};

    var requestOptions = {
      method: 'POST',
      body : JSON.stringify(data),
      headers: myHeaders,
      redirect: 'follow'
    };

fetch("https://rideassist.onrender.com/api/v1/trips/initiateTrip", requestOptions)
  .then(response => response.text())
  .then(result =>{console.log(result)
  
    alert("Trip Request Initiated!!")
    console.log(props.route.params)
    console.log(result)
    props.route.params.navigation.navigate('CabBooked')

  } )
  .catch(error => {
    
    console.log('error', error)
    alert("Oops encountered an error.")
  
  });
  }
}


  return (
    <SafeAreaView style={styles.wrapper}>
     <Text style={styles.header} >Please Enter the trip details!</Text>

    <View style={styles.container2}>
    {driverName!=="" && <View style={styles.rideDetails}>
      <Text>Rider Details : </Text>
      <Text>Name : {driverName} </Text>
      <Text>Cab Number is : {autoNumber} </Text>
      <Text>To begin your trip, kindly enter the additional details.</Text>
      </View>}

        <View style={styles.row}>
          <Image source={require('../assets/images/blue.png')} style={styles.flagIcon} />
          <TextInput onChangeText={setPickup} value={pickup} style={styles.input} placeholder="From" placeholderTextColor={HINT_AND_PLACEHOLDER} />
        </View>

        <View style={styles.row}>
          <Image source={require('../assets/images/green.png')} style={styles.flagIcon} />
          <TextInput onChangeText={setDrop} value={drop} style={styles.input} placeholder="To" placeholderTextColor={HINT_AND_PLACEHOLDER} />
        </View>

        <View style={styles.row}>
          <Image source={require('../assets/images/rupee.png')} style={styles.flagIcon} />
          <TextInput
            style={styles.input}
            placeholder="Offer your fare"
            keyboardType="numeric"
            placeholderTextColor={HINT_AND_PLACEHOLDER}
          />
        </View>

        <View style={styles.row}>
          <Image source={require('../assets/images/comments.png')} style={styles.flagIcon} />
          <TextInput style={styles.input} placeholder="Option and comments" placeholderTextColor={HINT_AND_PLACEHOLDER} />
        </View>

        <View style={styles.buttonContainer2}>
          <PrimaryButton title="Start Trip" onPressButton={initiateTrip} color={PRIMARY_COLOR_LIGHT} bold={false} />
        </View>
      </View>
    </SafeAreaView>

  )
}



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
  container2 : {
    backgroundColor:'white',
    marginTop : 40

  },
  rideDetails : {
    backgroundColor:"white",
    textAlign: "center",
    margin : 12
  },

  header : {
    fontSize : 22,
    textAlign:'center',
    marginTop: "20%"

  },
  wrapper:{
    backgroundColor:SECONDARY_TEXT_COLOR,
    flex : 1,
    alignContent: "center",

  }

});

export default BookCab