import { useState } from 'react';
import { TextInput, StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '../../../components/Themed';

import { RatioInputType } from '../../../types/type';

export const RatioInput = (props: RatioInputType) => {
  const { title } = props;
  const isDarkMode = useColorScheme() === 'dark';
  const [inputText, setInputText] = useState<string>("");

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={[styles.input, isDarkMode ? styles.dark : styles.light]}
        onChangeText={setInputText}
        placeholder="input ratio"
        value={inputText}
        maxLength={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    padding: 16,
    marginTop: 8,
    marginRight: 10,
    borderRadius: 10,
    width: 200,
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
