import { StyleSheet } from 'react-native';

import { Text, View } from '../Themed';
import { WaterViewType } from '../../types/type';
import { WaterInput } from '../Input/WaterInput';
import { WaterView } from './WaterView';
import { useSelector } from 'react-redux';

export const WaterBox = (props: WaterViewType) => {
  const { title } = props;
  const isLeftWater = useSelector((state) => state.isWater.isWater);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {isLeftWater ? (
        <>
          <View>
            <WaterView />
          </View>
        </>
      ) : (
        <>
          <View>
            <WaterInput />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 8,
  },
});
