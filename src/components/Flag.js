import React from 'react';
import {View, StyleSheet} from 'react-native';

export default (props) => {
  return (
    <View style={style.container}>
      <View style={[style.flagpole, props.big ? style.flagpoleBig : null]} />
      <View style={[style.flag, props.big ? style.flagBig : null]} />
      <View style={[style.base1, props.big ? style.base1Big : null]} />
      <View style={[style.base2, props.big ? style.base2Big : null]} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  flagpole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
  },
  flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: '#F22',
    marginLeft: 3,
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10,
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12,
  },
  flagpoleBig: {
    height: 28,
    width: 4,
    marginLeft: 16,
  },
  flagBig: {
    height: 10,
    width: 14,
    marginLeft: 3,
  },
  base1Big: {
    height: 4,
    width: 12,
    marginLeft: 12,
    marginTop: 20,
  },
  base2Big: {
    height: 4,
    width: 20,
    backgroundColor: '#222',
    marginLeft: 8,
    marginTop: 24,
  },
});
