import { StyleSheet } from 'react-native';

import { Text, View } from '../../../components/Themed';
import { WaterViewType } from '../../../types/type';
import { WaterInput } from '../Input/WaterInput';

export const WaterView = (props: WaterViewType) => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.containerItem}>
        <WaterInput />
      </View>
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
  containerItem: {},
});
