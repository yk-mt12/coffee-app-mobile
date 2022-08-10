import { StyleSheet } from 'react-native';

import { Text, View } from '../../assets/constants/Themed';
import * as Linking from 'expo-linking';

export const UserQuestionnaire = () => {
  const openLink = () => {
    Linking.openURL('https://forms.gle/5XwV6XAYX7jzwi9B8');
  };

  return (
    <View style={styles.container}>
      <Text onPress={openLink} style={styles.text}>
        ユーザアンケートはこちら
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 5,
  },
  text: {
    fontSize: 18,
    opacity: 80,
  },
});
