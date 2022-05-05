import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { LeftWater } from '../components/View/LeftWater';
import { RightWater } from '../components/View/RightWater';
import { useDispatch, useSelector } from 'react-redux';
import { RatioView } from '../components/View/RatioVeiw';
import Colors from '../constants/Colors';
import { TimerView } from '../components/View/TimerView';
import { useIsFocused } from '@react-navigation/native';
import { changeScreen } from '../redux/screenSlice';

export default function NormalScreen({}: RootTabScreenProps<'Normal'>) {
  const isLeftWater = useSelector((state) => state.coffee.isWater);
  const dispatch = useDispatch();
  const isForcused = useIsFocused();

  useEffect(() => {
    if (isForcused) {
      dispatch(changeScreen("normal"));
    }
  }, [isForcused]);

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
    backgroundColor: Colors['dark'].background,
  },
  light: {
    color: Colors['light'].text,
    backgroundColor: Colors['light'].background,
  },
});
