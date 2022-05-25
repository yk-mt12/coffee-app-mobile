import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { View } from '../../assets/constants/Themed';
import { RatioInput } from '../Input/RatioInput';
import { useIsFocused } from '@react-navigation/native';

export default function ModalScreen() {
  const isForcused = useIsFocused();

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <RatioInput title={'Ratio (default: 15)'} />
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
