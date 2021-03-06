import { StyleSheet } from 'react-native';

import { Text, View } from '../../assets/constants/Themed';
import { WaterViewType } from '../../types/type';
import { WaterInput } from '../Input/WaterInput';
import { WaterView } from './WaterView';
import { useSelector } from 'react-redux';
import { memo } from 'react';

export const WaterBox = memo((props: WaterViewType) => {
  const { title } = props;
  const isLeftWater = useSelector((state) => state.coffee.isWater);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {isLeftWater ? (
        <View>
          <WaterView />
        </View>
      ) : (
        <View>
          <WaterInput />
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    paddingBottom: 12,
  },
});
