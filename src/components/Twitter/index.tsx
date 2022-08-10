import { StyleSheet } from 'react-native';

import { Text, View } from '../../assets/constants/Themed';
import * as Linking from 'expo-linking';

export const Twitter = () => {
  const openLink = () => {
    Linking.openURL('https://twitter.com/kitsune_yk');
  };

  return (
    <View style={styles.container}>
      <Text onPress={openLink} style={styles.text}>
        Developd by Kitsune
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 5,
  },
  text: {
    fontSize: 18,
    opacity: 80,
  },
});
