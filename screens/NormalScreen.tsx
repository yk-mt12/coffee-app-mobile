import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { LeftWater } from '../components/View/LeftWater';
import { RightWater } from '../components/View/RightWater';
import { useSelector } from 'react-redux';
import { RatioView } from '../components/View/RatioVeiw';
import Colors from '../constants/Colors';

export default function NormalScreen({}: RootTabScreenProps<'Normal'>) {
  const isLeftWater = useSelector((state) => state.coffee.isWater);

  return (
    <View style={styles.container}>
      <View style={[styles.containerItem]}>
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
      <View style={styles.ratioContainer}>
        <RatioView />
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
  ratioContainer: {
    marginTop: 39,
    padding: 10,
    alignItems: 'center',
  },
  dark: {
    color: Colors['dark'].text,
    backgroundColor: Colors['dark'].background
  },
  light: {
    color: Colors['light'].text,
    backgroundColor: Colors['light'].background,
  },
});
