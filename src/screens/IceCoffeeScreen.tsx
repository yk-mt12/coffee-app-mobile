import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { View } from '../components/Themed';
import { LeftWater } from '../components/View/LeftWater';
import { RatioView } from '../components/View/RatioVeiw';
import { RightWater } from '../components/View/RightWater';
import { TimerView } from '../components/View/TimerView';
import Colors from '../constants/Colors';
import { changeScreen } from '../../redux/screenSlice';
import { updateIceAmount, updateIceWater } from '../../redux/coffeeSlice';

export default function IceCoffee() {
  const isLeftWater = useSelector((state) => state.coffee.isWater);
  const dispatch = useDispatch();
  let isForcused = useIsFocused();

  // TODO:
  // 画面遷移時ratioのデフォルト値を変更したい
  // modalから再度画面遷移した際にもイベントが発火してしまう。
  useEffect(() => {
      dispatch(changeScreen('iceCoffee'));
      dispatch(updateIceAmount(0));
      dispatch(updateIceWater(0));
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
