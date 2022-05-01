import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { View } from '../components/Themed';
import { AmountInput } from '../src/components/Input/AmountInput';
import { AmountView } from '../src/components/View/AmountView';
import { ChangeUiButton } from '../src/components/Button/ChangeUiButton';
import { WaterView } from '../src/components/View/WaterView';
import { RootTabScreenProps } from '../types';

export default function NormalScreen({}: RootTabScreenProps<'Normal'>) {
  return (
    <View style={styles.container}>
      <View style={[styles.containerItem]}>
        {/* TODO: ChangeUiButtonをクリックしたときに配置を変更する。 */}
        {false ? (
          <>
            <View style={styles.rowItem}>
              <AmountView title={'豆量'} />
            </View>
            <ChangeUiButton />
            <View style={styles.rowItem}>
              <WaterView title={'湯量'} />
            </View>
          </>
        ) : (
          <>
            <View style={styles.rowItem}>
              <WaterView title={'湯量'} />
            </View>
            <ChangeUiButton />
            <View style={styles.rowItem}>
              <AmountView title={'豆量'} />
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItem: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
  },
  rowItem: {
    textAlign: 'center',
    width: 150,
    flex: 0.5,
    paddingLeft: 30,
    paddingRight: 30,
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
