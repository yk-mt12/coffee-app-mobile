import React, { useState } from 'react';
import { Switch, StyleSheet } from 'react-native';
import { Text, View } from '../../../components/Themed';

import { SwitchButtonType } from '../../../types/type';

export const SwitchButton = (props: SwitchButtonType) => {
  const { title } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  console.log(title);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch
        trackColor={{ false: '#767577', true: 'gray' }}
        thumbColor={isEnabled ? 'f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switchButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  title: {
    paddingBottom: 5,
    fontSize: 25,
  },
  switchButton: {
    marginLeft: 30,
  }
});
