import React, { useState, memo, useEffect } from 'react';
import { StyleSheet, Switch, Appearance } from 'react-native';
import { Text, View } from '../../assets/constants/Themed';
import Colors from '../../assets/constants/Colors';

export const DarkModeButton = memo(() => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      setIsEnabled(true); // true means dark
    } else {
      setIsEnabled(false); // false means light
    }
  }, []);

  return (
    <View>
      <Text style={styles.title}></Text>
      <Switch
        trackColor={{
          true: Colors['toggleSwitch'].trueTrack,
          false: Colors['toggleSwitch'].falseTrack,
        }}
        thumbColor={Colors['toggleSwitch'].track}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    padding: 10,
    marginTop: 8,
    borderRadius: 10,
    width: '95%',
    fontSize: 20,
  },
  dark: {
    color: Colors['dark'].text,
    backgroundColor: Colors['dark'].background,
  },
  light: {
    color: Colors['light'].text,
    backgroundColor: Colors['light'].background,
  },
});
