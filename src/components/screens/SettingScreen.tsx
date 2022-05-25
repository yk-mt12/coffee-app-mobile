import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RatioInput } from '../components/Input/RatioInput';
import { RootTabScreenProps } from '../../types';

export default function Setting({}: RootTabScreenProps<'Setting'>) {
  return (
    <View style={styles.container}>
      <View>
        <RatioInput title={'Ratio(default: 16)'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'left',
    paddingTop: 15,
    paddingLeft: 10,
  },
  itemText: {
    fontSize: 20,
  },
});
