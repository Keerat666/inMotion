import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PrimaryButton = (props) => {
  const { title, onPressButton, color, bold } = props;

  const styles = StyleSheet.create({
    primaryButton: {
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      width: '100%',
      height: '100%',
    },
    buttonText: {
      color: '#000000',
      fontWeight: bold ? 'bold' : 'normal',
    },
  });

  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPressButton}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
