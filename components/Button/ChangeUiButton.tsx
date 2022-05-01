import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { updateIsWater } from '../../redux/isWaterSlice';

export const ChangeUiButton = () => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // TODO: onPressした時に湯量と豆量の配置を入れ替える！
    <FontAwesome
      name="exchange"
      size={24}
      color={isDarkMode ? 'white' : 'black'}
      onPress={() => dispatch(updateIsWater())}
    />
  );
};
