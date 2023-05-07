import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';

interface Lap {
  lap: any;
}

interface TimerLapProps {
  lapArray: Lap[];
}

const TimerLap = ({ lapArray }: TimerLapProps) => {
  const isDarkMode = useColorScheme() === 'dark';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#111',
  },
  emptyLapList: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    color: isDarkMode ? '#fff' : '#111',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    color: isDarkMode ? '#fff' : '#444',
    fontSize: 24,
    fontWeight: 'bold',
  },
  lapLabel: {
    color: isDarkMode ? '#fff' : '#444',
    fontSize: 18,
  },
  lapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  lapTime: {
    color: isDarkMode ? '#fff' : '#111',
    fontSize: 22,
    fontWeight: 'bold',
  },
  lapUnderline: {
    borderBottomColor: isDarkMode ? '#fff' : '#333',
    borderBottomWidth: 5,
    marginTop: 5,
  },
});


  const renderLap = (lap: Lap, index: number) => {
    // const lapTime = moment.duration(lap.lap).format('mm:ss.SS');
    return (
      <View key={index} style={styles.lapRow}>
        <Text style={styles.lapLabel}>Lap {index + 1}</Text>
        <Text style={styles.lapTime}>{lap}</Text>
        <View style={styles.lapUnderline}></View>
      </View>
    );
  };

  const renderLapList = () => {
    if (lapArray.length === 0) {
      return (
        <View style={styles.emptyLapList}>
          <Text>No laps recorded</Text>
        </View>
      );
    }

    return lapArray.map((lap, index) => renderLap(lap, index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Laps</Text>
      </View>
      {renderLapList()}
    </View>
  );
};

export default TimerLap;
