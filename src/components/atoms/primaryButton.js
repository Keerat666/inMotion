import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PrimaryButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.primaryButton}
      onPress={props.onPressButton}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    primaryButton: {
      backgroundColor: '#B5E755',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      width: '90%',
      height : '7%',
      marginHorizontal : '40%'
    },
    buttonText: {
      color: '#000000',
      fontWeight: 'bold',
    },
  });

export default PrimaryButton;
