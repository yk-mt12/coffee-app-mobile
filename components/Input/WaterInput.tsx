import { memo, useState } from 'react';
import { TextInput, StyleSheet, useColorScheme, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import { calculateAmount, updateWater } from '../../redux/coffeeSlice';

export const WaterInput = memo(() => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const [water, setWater] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={[styles.input, isDarkMode ? styles.dark : styles.light]}
        placeholder="input"
        maxLength={3}
        returnKeyType="done"
        keyboardType="numbers-and-punctuation"
        textAlign="center"
        onChangeText={(newText) => setWater(Number(newText))}
        onSubmitEditing={() => {
          dispatch(updateWater(water));
          dispatch(calculateAmount(water));
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
