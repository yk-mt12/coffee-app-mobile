import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { updateIsWater, updateAmount, updateWater } from '../../../redux/coffeeSlice';

export const ChangeUiButton = () => {
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <FontAwesome
      name="exchange"
      size={24}
      color={isDarkMode ? 'white' : 'black'}
      onPress={() => {
        dispatch(updateIsWater());
        dispatch(updateAmount(0));
        dispatch(updateWater(0));
      }}
    />
  );
};
