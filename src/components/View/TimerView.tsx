import React, { memo, useEffect, useState } from 'react';
import { Text, View } from '../../assets/constants/Themed';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Colors from '../../assets/constants/Colors';
import { useColorScheme } from 'react-native';
import TimerLap from './TimerLap';

export const TimerView = memo(() => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isStopwatchStart, setIsStopwatchStart] = useState<boolean>(false); // false→タイマー停止中, true→タイマー起動中
  const [resetStopwatch, setResetStopwatch] = useState<boolean>(false);
  const [lapArray, setLapArray] = useState([]);

  let currentTime: any = null;

  function getFormattedTime(time: any) {
    currentTime = time;
  }

  const styles = StyleSheet.create({
    container: {},
    sectionStyle: {},
    button: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginHorizontal: 40,
    },
    buttonText: {},
    resetText: {
      fontSize: 14,
      color:  Colors['dark'].text,
    },
    lapText: {
      fontSize: 14,
      color:  Colors['dark'].text,
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
      fontSize: 14,
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
      fontSize: 14,
      color: isDarkMode ? Colors['timerButtonDark'].stopText : Colors['timerButtonLight'].stopText,
    },
    resetButton: {
      backgroundColor: '#414141',
      fontSize: 14,
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
    },
    lapButton: {
      backgroundColor: '#414141',
      color: Colors['light'].text,
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

  // reset button が押された時、Lapもリセットする
  useEffect(() => {
    setLapArray([]);
  }, [resetStopwatch]);

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.sectionStyle, isDarkMode ? styles.dark : styles.light]}>
          <Stopwatch
            start={isStopwatchStart}
            reset={resetStopwatch}
            options={options}
            getTime={getFormattedTime}
            style={isDarkMode ? styles.dark : styles.light}
          />
        </View>
        <View style={[styles.button]}>
          <TouchableHighlight
            onPress={() => {
              !isStopwatchStart && setIsStopwatchStart(false);
              !isStopwatchStart ? setResetStopwatch(true) : setLapArray([...lapArray, currentTime]);
            }}
            style={[
              !isStopwatchStart ? styles.resetButton : styles.lapButton,
              isStopwatchStart && { opacity: 0.3 },
            ]}>
            <Text style={[!isStopwatchStart ? styles.resetText : styles.lapText]}>
              {!isStopwatchStart ? 'リセット' : 'ラップ'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}
            style={[isStopwatchStart ? styles.stopButton : styles.startButton]}>
            <Text
              style={[styles.buttonText, isStopwatchStart ? styles.stopText : styles.startText]}>
              {!isStopwatchStart ? '開始' : '停止'}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <TimerLap lapArray={lapArray} />
    </>
  );
});
