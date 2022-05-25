const tintColorLight = '#333';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#333',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#333',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  toggleSwitch: {
    track: '#fff',
    trueTrack: '#56DE03',
    falseTrack: '#DDDDDD',
  },
  inputView: {
    wText: '#fff',
    dText: '#333',
    wBackground: 'rgba(168, 168, 168, 0.09)',
    dBackground: 'rgba(216, 216, 216, 0.09)',
  },
  timerButtonLight: {
    startText:  'rgb(52, 199, 89)',
    startBackground: 'rgba(52, 199, 89, 0.4)',
    startBorder: 'rgba(52, 199, 89, 0.3)',
    stopText: 'rgba(255, 59, 48, 0.7)',
    stopBackground: 'rgba(255, 59, 48, 0.4)',
  },
  timerButtonDark: {
    startText:  'rgba(48, 209, 88, 0.9)',
    startBackground: 'rgba(48, 209, 88, 0.3)',
    stopText: 'rgba(255, 69, 58, 0.9)',
    stopBackground: 'rgba(255, 69, 58, 0.3)',
  },
  timerResetButton: {
    dText: '#333',
    wText: '#fff',
    background: 'rgb(208, 208, 208)'
  }
};
