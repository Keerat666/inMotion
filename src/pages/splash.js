import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, Animated } from 'react-native';
import { PRIMARY_COLOR } from '../utils/styles/colors';

export default function Splash(props) {
  const centerImageScale = useRef(new Animated.Value(0)).current;
  const footerImageTranslateY = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    // Animation for center image
    Animated.timing(centerImageScale, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Animation for footer image
    Animated.timing(footerImageTranslateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.containerHead}>
      <View style={styles.centerContainer}>
        <Animated.Image
          source={require('../assets/images/peopleDriven.png')}
          style={[styles.centerImage, { transform: [{ scale: centerImageScale }] }]}
        />
      </View>
      <View style={styles.footerContainer}>
        <Animated.Image
          source={require('../assets/images/inDrive.png')}
          style={[styles.footerImage, { transform: [{ translateY: footerImageTranslateY }] }]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerHead: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    height : '100%',
    width : '100%'
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerImage: {
    width: 200,
    height: 200,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  footerImage: {
    width: 150,
    height: 50,
  },
});
