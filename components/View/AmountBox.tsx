import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import { WaterViewType } from '../../types/type';
import { AmountInput } from '../Input/AmountInput';
import { AmountView } from './AmountView';
import { useSelector } from 'react-redux';

export const AmountBox = (props: WaterViewType) => {
  const { title } = props;
  const isLeftWater = useSelector((state) => state.isWater.isWater);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {/* TODO: 左に湯量があるときフォームは表示しない。  */}
      {isLeftWater ? (
        <>
          <View>
            <AmountInput />
          </View>
        </>
      ) : (
        <>
          <View>
            <AmountView />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 8,
  },
});
