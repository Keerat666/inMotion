import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RideBookedScreen = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animateCheckmark();
  }, []);

  const animateCheckmark = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.elastic(1.5),
      useNativeDriver: true,
    }).start();
  };

  const scale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1.2, 1],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.checkmarkContainer, { transform: [{ scale }] }]}>
        <Ionicons name="checkmark-circle" size={120} color="#4CAF50" />
      </Animated.View>
      <Text style={styles.heading}>Ride Booked Successfully</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
  },
  checkmarkContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default RideBookedScreen;
