import React, { memo, useEffect, useState } from 'react';
import { Text, View } from '../../assets/constants/Themed';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Colors from '../../assets/constants/Colors';
import { useColorScheme } from 'react-native';

export const TimerView = memo(() => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

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
      color: isDarkMode ? Colors['timerResetButton'].dText : Colors['timerResetButton'].wText,
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

      backgroundColor: isDarkMode
        ? Colors['timerButtonDark'].startBackground
        : Colors['timerButtonLight'].startBackground,
    },
    startText: {
      color: isDarkMode
        ? Colors['timerButtonDark'].startText
        : Colors['timerButtonLight'].startText,
    },
    stopButton: {
      backgroundColor: isDarkMode
        ? Colors['timerButtonDark'].stopBackground
        : Colors['timerButtonLight'].stopBackground,
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
    },
    stopText: {
      color: isDarkMode ? Colors['timerButtonDark'].stopText : Colors['timerButtonLight'].stopText,
    },
    resetButton: {
      backgroundColor: Colors['timerResetButton'].background,
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
    },
  });

  const options = {
    container: {
      paddingTop: 20,
      borderRadius: 4,
      alignItems: 'center',
    },
    text: {
      fontSize: 84,
      fontWeight: '300',
      color: isDarkMode ? Colors['dark'].text : Colors['light'].text,
      margin: 20,
    },
  };

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
            style={[styles.resetButton]}
          >
            <Text style={[styles.buttonText]}>RESET</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}
            style={[isStopwatchStart ? styles.stopButton : styles.startButton]}
          >
            <Text
              style={[styles.buttonText, isStopwatchStart ? styles.stopText : styles.startText]}
            >
              {!isStopwatchStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
});