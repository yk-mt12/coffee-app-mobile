import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import {  View } from '../components/Themed';
import { LeftWater } from '../components/View/LeftWater';
import { RatioView } from '../components/View/RatioVeiw';
import { RightWater } from '../components/View/RightWater';
import { TimerView } from '../components/View/TimerView';
import Colors from '../constants/Colors';

export default function CafeAuLaitScreen() {
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
      <View>
          <TimerView />
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
