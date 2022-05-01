import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, useColorScheme } from 'react-native';

// import { waterViewType } from "../../types/type";
import { Text, View } from '../Themed';

export const WaterView = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const water = useSelector((state) => state.water.water);

  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      <Text style={styles.text}>{water}</Text>
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
