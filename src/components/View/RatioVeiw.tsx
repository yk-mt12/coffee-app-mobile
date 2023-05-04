import React, { memo, useEffect } from 'react';
import { useColorScheme, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../assets/constants/Colors';
import { Text, View } from '../../assets/constants/Themed';

export const RatioView = memo(() => {
  const isDarkMode = useColorScheme() === 'dark';
  const ratio: number = useSelector((state) => state.coffee.ratio);
  const { nowScreen } = useSelector((state) => state.screen);

  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      <Text style={styles.text}>
        Ratio {nowScreen == 'iceCoffee' ? 2 : 1} : {ratio}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
