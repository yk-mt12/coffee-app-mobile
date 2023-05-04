import { memo, useState } from 'react';
import { TextInput, StyleSheet, useColorScheme, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../assets/constants/Colors';
import { calculateAmount, calculateIceCoffeeAmount, updateWater } from '../../../redux/coffeeSlice';
import React from 'react';

export const WaterInput = memo(() => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const [water, setWater] = useState<number>(0);
  const nowScreen = useSelector((state) => state.screen.nowScreen);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={[styles.input, isDarkMode ? styles.dark : styles.light]}
        placeholder="入力"
        maxLength={3}
        returnKeyType="done"
        keyboardType="numbers-and-punctuation"
        textAlign="center"
        onChangeText={(newText) => setWater(Number(newText))}
        onSubmitEditing={() => {
          dispatch(updateWater(water));
          if (nowScreen === 'normal' || nowScreen === 'cafeAuLait') {
            dispatch(calculateAmount(water));
          } else if (nowScreen === 'iceCoffee') {
            dispatch(calculateIceCoffeeAmount(water));
          }
        }}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    left: -5,
    textAlign: 'center',
  },
  input: {
    padding: '12px 8px',
    marginTop: 8,
    borderRadius: 10,
    width: 100,
    height: 40,
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
