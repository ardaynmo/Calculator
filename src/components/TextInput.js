import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {decimalPattern} from '../utils/constant';

export default function Input({
  placeholder,
  style,
  value,
  kbt = 'numeric',
  setValue,
  ...rest
}) {
  return (
    <TextInput
      {...rest}
      placeholder={placeholder}
      style={[styles.it, style]}
      value={value}
      onChangeText={text => {
        if (text.match(decimalPattern)) setValue(text);
      }}
      keyboardType={kbt}></TextInput>
  );
}

const styles = StyleSheet.create({
  it: {
    width: 125,
    height: 60,
    backgroundColor: colors.bgcolor.simple,
    paddingLeft: 10,
    borderWidth: 3,
    borderRadius: 10,
    alignSelf: 'center',
    textAlignVertical: 'center',
    marginBottom: 5,
    marginTop: '50%',
    marginLeft: '13%',
  },
});
