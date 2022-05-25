import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../assets/constants/Themed';
import { WaterViewType } from '../../types/type';
import { AmountInput } from '../Input/AmountInput';
import { AmountView } from './AmountView';
import { useSelector } from 'react-redux';

export const AmountBox = memo((props: WaterViewType) => {
  const { title } = props;
  const isLeftWater = useSelector((state) => state.coffee.isWater);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {isLeftWater ? (
        <View>
          <AmountInput />
        </View>
      ) : (
        <View>
          <AmountView />
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    paddingBottom: 12,
  },
});
