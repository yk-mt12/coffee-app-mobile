import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../../components/Themed';
import { WaterViewType } from '../../../types/type';
import { AmountInput } from '../Input/AmountInput';

export const AmountView = (props: WaterViewType) => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.containerItem}>
        <AmountInput />
      </View>
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
  containerItem: {

  },
});
