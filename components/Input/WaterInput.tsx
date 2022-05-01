import { useState } from 'react';
import { TextInput, StyleSheet, useColorScheme, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateWater } from '../../redux/waterSlice';

export const WaterInput = () => {
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
        onSubmitEditing={() => dispatch(updateWater(water))}
      />
    </SafeAreaView>
  );
};

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
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
  },
  light: {
    color: '#333',
    backgroundColor: 'rgba(64, 64, 64, 0.09)',
  },
});
