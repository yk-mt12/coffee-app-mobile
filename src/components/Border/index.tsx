import { StyleSheet } from 'react-native';

import { View } from '../../assets/constants/Themed';

type BorderProps = {
  styleName: string;
};

export const Border = (props: BorderProps) => {
  const { styleName } = props;

  return <View style={styleName === 'twitter' ? styles.twitter : styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 10,
    width: 160,
    marginLeft: 8,
    borderColor: 'gray',
    borderWidth: 1,
  },
  twitter: {
    marginTop: 8,
    marginBottom: 10,
    width: 136,
    marginLeft: 8,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
