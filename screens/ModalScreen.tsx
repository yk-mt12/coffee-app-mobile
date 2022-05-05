import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RatioInput } from '../components/Input/RatioInput';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateAmount, updateWater } from '../redux/coffeeSlice';
import { useIsFocused } from '@react-navigation/native';

export default function ModalScreen() {
  const dispatch = useDispatch();
  const isForcused = useIsFocused();

  useEffect(() => {
    if (isForcused) {
      // dispatch(updateAmount(0));
      // dispatch(updateWater(0));
    }
  }, [isForcused]);

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <RatioInput title={'Ratio (default: 16)'} />
      {/* <DarkModeButton /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  switchButton: {
    marginTop: 15,
  },
});
