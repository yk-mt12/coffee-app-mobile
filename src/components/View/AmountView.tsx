import React, { memo, useEffect, useState } from 'react';
import { useColorScheme, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../assets/constants/Colors';
import { Text, View } from '../../assets/constants/Themed';

export const AmountView = memo(() => {
  const isDarkMode = useColorScheme() === 'dark';
  const { amount } = useSelector((state) => state.coffee);

  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      <Text style={styles.text}>{amount} g</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginTop: 8,
    borderRadius: 10,
    width: 100,
    height: 40,
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
