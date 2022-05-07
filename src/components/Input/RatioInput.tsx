import { memo, useState } from 'react';
import { TextInput, StyleSheet, useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';

import { Text, View } from '../Themed';
import { updateAmount, updateRatio, updateWater } from '../../../redux/coffeeSlice';
import { RatioInputType } from '../../types/type';
import Colors from '../../constants/Colors';

export const RatioInput = memo((props: RatioInputType) => {
  const dispatch = useDispatch();
  const { title } = props;
  const isDarkMode = useColorScheme() === 'dark';
  const [ratio, setRatio] = useState<number>(0);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={[styles.input, isDarkMode ? styles.dark : styles.light]}
        placeholder="input"
        maxLength={2}
        returnKeyType="done"
        keyboardType="numbers-and-punctuation"
        // textAlign="center"
        onChangeText={(newText) => setRatio(Number(newText))}
        onSubmitEditing={() => {
          dispatch(updateRatio(ratio));
          dispatch(updateWater(0));
          dispatch(updateAmount(0));
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    marginTop: 8,
    borderRadius: 10,
    width: '95%',
    fontSize: 20,
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
