import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../../assets/constants/Themed';
import { RootStackScreenProps } from '../../../types';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>きてくれてありがとう！今日もコーヒーを楽しもう！</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>ホームへ戻る</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
