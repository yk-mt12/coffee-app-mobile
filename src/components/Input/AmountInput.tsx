import { memo, useState } from 'react';
import { TextInput, StyleSheet, useColorScheme, SafeAreaView, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../constants/Colors';

import {
  calculateWater,
  updateAmount,
  calculateIceCoffeeWater,
} from '../../../redux/coffeeSlice';

export const AmountInput = memo(() => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const [amount, setAmount] = useState<number>(0);
  const nowScreen = useSelector((state) => state.screen.nowScreen);

  function changeAmountInput() {
    switch (nowScreen) {
      case 'normal':
        dispatch(calculateWater(amount));
      case 'iceCoffee':
        dispatch(calculateIceCoffeeWater(amount));
      default:
        dispatch(calculateWater(amount));
    }
  }

  return (
    <TextInput
      style={[styles.input, isDarkMode ? styles.dark : styles.light]}
      placeholder="input"
      maxLength={3}
      returnKeyType="done"
      keyboardType="numbers-and-punctuation"
      textAlign="center"
      onChangeText={(newText) => setAmount(Number(newText))}
      onSubmitEditing={() => {
        dispatch(updateAmount(amount));
        changeAmountInput();
      }}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 8,
    marginTop: 8,
    marginRight: 10,
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
