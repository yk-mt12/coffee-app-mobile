import { useState } from 'react';
import { TextInput, StyleSheet, useColorScheme, SafeAreaView } from 'react-native';

export const AmountInput = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [amount, setAmount] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={[styles.input, isDarkMode ? styles.dark : styles.light]}
        onChangeText={(newText) => setAmount(Number(newText))}
        placeholder="input amount"
        maxLength={3}
        keyboardType="numbers-and-punctuation"
        textAlign="center"
      />
    </SafeAreaView>
  );
};

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
