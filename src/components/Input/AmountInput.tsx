import { useState } from 'react';
import { TextInput, StyleSheet, useColorScheme } from 'react-native';
import { View } from '../../../components/Themed';

export const AmountInput = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [inputText, setInputText] = useState<string>("");

  return (
    <View style={styles.container}>
      {/* TODO: 入力値が表示されない問題を解消する */}
      <TextInput
        style={[styles.input, isDarkMode ? styles.dark : styles.light]}
        onChangeText={setInputText}
        placeholder="input amount"
        value={inputText}
        maxLength={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 20,
    marginTop: 8,
    marginRight: 10,
    borderRadius: 10,
    width: 100,
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
