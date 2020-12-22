import React from 'react';
import {StyleSheet, View} from 'react-native';

import Field from './Field';

export default (props) => {
  const rows = props.board.map((row, rowIndex) => {
    const columns = row.map((field, columnIndex) => {
      return (
        <Field
          {...field}
          key={columnIndex}
          onOpen={() => props.onOpenField(rowIndex, columnIndex)}
          onSelect={(e) => props.onSelectField(rowIndex, columnIndex)}
        />
      );
    });

    return (
      <View key={rowIndex} style={{flexDirection: 'row'}}>
        {columns}
      </View>
    );
  });
  return <View style={style.container}>{rows}</View>;
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
});
