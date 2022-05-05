import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, useColorScheme } from 'react-native';

// import { waterViewType } from "../../types/type";
import { Text, View } from '../Themed';
import Colors from '../../constants/Colors';


export const WaterView = memo(() => {
  const isDarkMode = useColorScheme() === 'dark';
  const water = useSelector((state) => state.coffee.water);

  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      <Text style={styles.text}>{water} ml</Text>
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
