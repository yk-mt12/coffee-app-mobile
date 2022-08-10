/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Normal: {
            screens: {
              NormalScreen: 'normal',
            },
          },
          CafeAuLait: {
            screens: {
              CafeAuLaitScreen: 'cafe au lait',
            },
          },
          IceCoffee: {
            screens: {
              IceCoffeeScreen: 'Ice coffee',
            },
          },
          // Setting: {
          //   screens: {
          //     SettingScreen: 'Setting',
          //   },
          // },
        },
      },
      Setting: 'Setting',
      NotFound: '*',
    },
  },
};

export default linking;
