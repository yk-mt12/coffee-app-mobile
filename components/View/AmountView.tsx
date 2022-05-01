import React from 'react';
import { useColorScheme, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Text, View } from '../Themed';

export const AmountView = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const amount = useSelector((state) => state.amount.amount);

  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      <Text style={styles.text}>{amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginTop: 8,
    marginRight: 10,
    borderRadius: 10,
    width: 100,
    height: 40,
    textAlign: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
  dark: {
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
  },
  light: {
    color: '#333',
    backgroundColor: 'rgba(64, 64, 64, 0.09)',
  },
});
