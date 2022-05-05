import React, { memo, useEffect, useState } from 'react';
import { Text, View } from '../Themed';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { useColorScheme } from 'react-native';

export const TimerView = memo(() => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.sectionStyle, isDarkMode ? styles.dark : styles.light]}>
          <Stopwatch
            start={isStopwatchStart}
            reset={resetStopwatch}
            options={options}
            style={isDarkMode ? styles.dark : styles.light}
          />
        </View>
        <View style={[styles.button]}>
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}
            style={[styles.resetButton]}>
            <Text style={[styles.buttonText]}>RESET</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}
            style={[isStopwatchStart ? styles.stopButton : styles.startButton]}>
            <Text
              style={[
                styles.buttonText,
                // isDarkMode ? styles.darkRightLayout : styles.lightRightLayout,
              ]}>
              {!isStopwatchStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  sectionStyle: {},
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 40,
  },
  buttonText: {
    fontSize: 20,
  },
  dark: {
    color: Colors['inputView'].wText,
    // backgroundColor: Colors['inputView'].wBackground,
  },
  light: {
    color: Colors['inputView'].dText,
    // backgroundColor: Colors['inputView'].wBackground,
  },
  startButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    color: Colors['timerButtonLight'].startText,
    backgroundColor: Colors['timerButtonLight'].startBackground,
  },
  stopButton: {
    color: Colors['timerButtonLight'].stopText,
    backgroundColor: Colors['timerButtonLight'].stopBackground,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
  },
  resetButton: {
    color: Colors['timerResetButton'].text,
    backgroundColor: Colors['timerResetButton'].background,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
  },
  darkRightLayout: {
    // color: Colors['timerButtonDark']
  },
  lightRightLayout: {},
});

const options = {
  container: {
    padding: 20,
    borderRadius: 4,
    width: '98%',
    alignItems: 'center',
  },
  text: {
    fontSize: 84,
    fontWeight: '300',
    color: Colors['inputView'].wText,
    margin: 20,
  },
};
