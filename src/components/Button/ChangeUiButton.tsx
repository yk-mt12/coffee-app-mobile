import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const ChangeUiButton = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isWaterLeft, setIsWaterLeft] = useState<boolean>(false);

  return (
    // TODO: onPressした時に湯量と豆量の配置を入れ替える！
    <FontAwesome
      name="exchange"
      size={24}
      color={isDarkMode ? 'white' : 'black'}
      onPress={() => setIsWaterLeft(!isWaterLeft)}
    />
  );
};
