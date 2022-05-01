import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { View } from '../components/Themed';
import { AmountBox } from '../components/View/AmountBox';
import { ChangeUiButton } from '../components/Button/ChangeUiButton';
import { WaterBox } from '../components/View/WaterBox';
import { RootTabScreenProps } from '../types';
import { LeftWater } from '../components/View/LeftWater';
import { RightWater } from '../components/View/RightWater';
import { useSelector } from 'react-redux';

export default function NormalScreen({}: RootTabScreenProps<'Normal'>) {
  const isLeftWater = useSelector(state => state.isWater.isWater)

  return (
    <View style={styles.container}>
      <View style={[styles.containerItem]}>
        {/* TODO: ChangeUiButtonをクリックしたときに配置を変更する。 */}
        {isLeftWater ? (
          <>
            <RightWater />
          </>
        ) : (
          <>
            <LeftWater />
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
  dark: {
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
  },
  light: {
    color: '#333',
    backgroundColor: 'rgba(64, 64, 64, 0.09)',
  },
});
