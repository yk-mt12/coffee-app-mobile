import React, { memo } from 'react';
import { useColorScheme, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import { Text, View } from '../Themed';

export const RatioView = memo(() => {
  const isDarkMode = useColorScheme() === 'dark';
  const ratio = useSelector((state) => state.coffee.ratio);

  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      <Text style={styles.text}>Ratio 1 : {ratio}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 8,
    marginRight: 10,
    borderRadius: 10,
    width: 150,
    height: 40,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  dark: {
    color: Colors['inputView'].wText,
    backgroundColor: Colors['inputView'].wBackground,
  },
  light: {
    color: Colors['inputView'].dText,
    backgroundColor: Colors['inputView'].wBackground,
  },
});
