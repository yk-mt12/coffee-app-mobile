import React, { memo } from 'react';
import { useColorScheme, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import { Text, View } from '../Themed';

export const AmountView = memo(() => {
  const isDarkMode = useColorScheme() === 'dark';
  const { amount, iceAmount } = useSelector((state) => state.coffee);
  const nowScreen = useSelector((state) => state.screen.nowScreen);

  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      <Text style={styles.text}>{nowScreen === 'normal' ? amount : iceAmount} g</Text>
    </View>
  );
});

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
    color: Colors['inputView'].wText,
    backgroundColor: Colors['inputView'].wBackground,
  },
  light: {
    color: Colors['inputView'].dText,
    backgroundColor: Colors['inputView'].wBackground,
  },
});
