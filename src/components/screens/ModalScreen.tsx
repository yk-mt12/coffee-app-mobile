import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { View } from '../../assets/constants/Themed';
import { RatioInput } from '../Input/RatioInput';
import { useIsFocused } from '@react-navigation/native';
import { UserQuestionnaire } from '../userQusetion';
import { Twitter } from '../Twitter';
import { Border } from '../Border';

export default function ModalScreen() {
  const isForcused = useIsFocused();

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <RatioInput title={'Ratio (default: 15)'} />
      <UserQuestionnaire />
      <Border styleName={'userQuestion'} />
      <Twitter />
      <Border styleName={'twitter'} />
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
