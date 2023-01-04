import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';

export default function TextInputt({
  children,
  ph,
  l,
  style,
  value,
  kbt,
  oct,
  ...rest
}) {
  return (
    <View>
      <TextInput
        {...rest}
        placeholder={ph}
        style={[styles.it, style]}
        value={addt}
        onChangeText={text => {
          if (text.match(decimalPattern)) setAddt(text);
        }}
        keyboardType={kbt}>
        {children}
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  it: {
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    paddingLeft: 10,
    marginBottom: 5,
  },
});
