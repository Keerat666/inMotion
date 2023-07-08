import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import UserForm from '../components/organisms/userForm';
import { SECONDARY_TEXT_COLOR } from '../utils/styles/colors';

const UserDashboard = ({ route }) => {

  const { data } = route.params;

  constructor()
  {
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <UserForm data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SECONDARY_TEXT_COLOR
  },
  map: {
    flex: 1,
    marginBottom : 10
  },
});

export default UserDashboard;
