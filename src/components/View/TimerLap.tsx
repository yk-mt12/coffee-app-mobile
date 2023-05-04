import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

interface Lap {
  lap: any;
}

interface TimerLapProps {
  lapArray: Lap[];
}

const TimerLap = ({ lapArray }: TimerLapProps) => {
  const renderLap = (lap: Lap, index: number) => {
    return (
      <View style={styles.lapRow}>
        <Text style={styles.lapLabel}>Lap {index + 1}</Text>
        <Text style={styles.lapTime}>{lap}</Text>
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

  return <View style={styles.container}>{renderLapList()}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
  },
  emptyLapList: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  lapLabel: {
    color: '#444',
    fontSize: 18,
  },
  lapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  lapTime: {
    color: '#111',
    fontSize: 18,
  },
  toggleLapListButton: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  toggleLapListButtonText: {
    color: '#007aff',
    fontSize: 16,
  },
});

export default TimerLap;
