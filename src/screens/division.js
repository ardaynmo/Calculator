import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import Input from '../components/TextInput';

export default function Sub() {
  const [addo, setAddo] = useState('');
  const [addt, setAddt] = useState('');
  const addres = addo / addt;
  const decimalPattern = /^[0-9]*[.,]?[0-9]*$/;

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',
          backgroundColor: colors.bgcolor.innerview,
        }}>
        <View>
          <Input style={styles.add1} value={addo} setValue={setAddo} />
        </View>
        <Text
          style={{
            fontSize: 43,
            marginVertical: 60,
            color: colors.color.number,
          }}>
          /
        </Text>
        <View>
          <Input style={styles.add1} value={addt} setValue={setAddt} />
        </View>
      </View>
      <View style={styles.Resultcontainer}>
        <Text style={styles.Result}>{addres}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 10,
  },
});
