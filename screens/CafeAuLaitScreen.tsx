import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { View } from '../components/Themed';
import { LeftWater } from '../components/View/LeftWater';
import { RatioView } from '../components/View/RatioVeiw';
import { RightWater } from '../components/View/RightWater';
import { TimerView } from '../components/View/TimerView';
import Colors from '../constants/Colors';
import { updateAmount, updateWater } from '../redux/coffeeSlice';
import { changeScreen } from '../redux/screenSlice';

export default function CafeAuLaitScreen() {
  const isLeftWater = useSelector((state) => state.coffee.isWater);
  const dispatch = useDispatch();
  const isForcused = useIsFocused();

  useEffect(() => {
    if (isForcused) {
      dispatch(changeScreen('cafeAuLait'));
      dispatch(updateAmount(0));
      dispatch(updateWater(0));
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
