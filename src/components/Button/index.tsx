import React from 'react';
import {Pressable, Text} from 'react-native';
import {StyleSheet} from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
  customStyles?: object;
}
const Button = ({text, onPress, customStyles}: ButtonProps) => {
  return (
    <Pressable style={[styles.root, customStyles]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 40,
    padding:0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 20,
    fontWeight:'bold'
  },
});

export default Button;
