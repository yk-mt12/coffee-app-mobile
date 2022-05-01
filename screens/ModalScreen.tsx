import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RatioInput } from '../src/components/Input/RatioInput';
import { SwitchButton } from '../src/components/Button/SwitchButton';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <RatioInput title={'Ratio (default: 16)'} />
      {/* <View style={styles.switchButton}>
        <SwitchButton title={'default change water or bean'} />
      </View> */}
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
    // width: 600,
  },
});
