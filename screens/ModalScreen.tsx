import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RatioInput } from '../components/Input/RatioInput';
import React from 'react';
import { DarkModeButton } from '../components/Button/DarkModeButton';

export default function ModalScreen() {
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
