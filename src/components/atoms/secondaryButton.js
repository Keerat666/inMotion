import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SecondaryButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.secondaryButton}
      onPress={props.onPressButton}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  secondaryButton: {
      backgroundColor: '#495562',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      width: '100%',
      height : '100%'
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  });

export default SecondaryButton;
