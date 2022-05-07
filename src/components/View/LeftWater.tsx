import { StyleSheet } from 'react-native';

import { WaterBox } from './WaterBox';
import { View } from '../Themed';
import React, { memo } from 'react';
import { ChangeUiButton } from '../Button/ChangeUiButton';
import { AmountBox } from './AmountBox';

export const LeftWater = memo(() => {
  return (
    <>
      <View style={styles.rowItem}>
        <WaterBox title={'湯量'} />
      </View>
      <ChangeUiButton />
      <View style={styles.rowItem}>
        <AmountBox title={'豆量'} />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  rowItem: {
    textAlign: 'center',
    width: 150,
    flex: 0.5,
    paddingLeft: 30,
    paddingRight: 30,
  },
})