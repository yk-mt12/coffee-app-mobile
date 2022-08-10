import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { View } from '../../assets/constants/Themed';
import { LeftWater } from '../View/LeftWater';
import { RatioView } from '../View/RatioVeiw';
import { RightWater } from '../View/RightWater';
import { TimerView } from '../View/TimerView';
import Colors from '../../assets/constants/Colors';
import { updateAmount, updateWater } from '../../../redux/coffeeSlice';
import { changeScreen } from '../../../redux/screenSlice';

export default function IceCoffee() {
  const isLeftWater = useSelector((state) => state.coffee.isWater);
  const dispatch = useDispatch();
  const isForcused = useIsFocused();

  // TODO:
  // 画面遷移時ratioのデフォルト値を変更したい
  // modalから再度画面遷移した際にもイベントが発火してしまう。
  useEffect(() => {
    if (isForcused) {
      dispatch(changeScreen('iceCoffee'));
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
