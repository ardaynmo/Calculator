import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import Input from '../components/TextInput';

export default function Sub() {
  const [addo, setAddo] = useState('');
  const [addt, setAddt] = useState('');
  const addre = addt * addt;
  const addres = addre * addt;
  const decimalPattern = /^[0-9]*[.,]?[0-9]*$/;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',
          backgroundColor: colors.bgcolor.innerview,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 43,
            marginVertical: 60,
            color: colors.color.number,
          }}></Text>
        <View>
          <Input value={addt} setValue={setAddt} />
        </View>
      </View>
      <View style={styles.Resultcontainer}>
        <Text style={styles.Result}>{addres}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  add1: {
    borderColor: colors.color.textinput,
    borderWidth: 4,
    width: 150,
    borderRadius: 10,
    height: 70,
    marginHorizontal: 15,
    marginVertical: 60,
    fontSize: 35,
    color: colors.color.number,
  },
  add2: {
    borderColor: colors.color.textinput,
    borderWidth: 4,
    width: 150,
    borderRadius: 10,
    height: 70,
    fontSize: 35,
    marginVertical: 60,
    marginHorizontal: 15,
    color: colors.color.number,
  },
  Result: {
    color: '#11f',
    fontFamily: 'fantasy',
    fontSize: 50,
  },
  Resultcontainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Resulte: {
    color: '#Fa1',
    fontFamily: 'fantasy',
    fontSize: 30,
  },
});
