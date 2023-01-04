import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/colors';
import {decimalPattern} from '../utils/constant';
import Input from '../components/TextInput';
// import TextInputo from '../components/TextInput';

export default function Multi() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const hei = height * 0.3048;
  const heis = hei * hei;
  const res = parseInt(width / heis);

  var ruse;
  if (res <= 18) {
    ruse = 'UnderWeight';
  } else if (res < 20 && res > 18) {
    ruse = 'Slightly UnderWeight';
  } else if (res >= 20 && res <= 21) {
    ruse = 'Normal';
  } else if (res >= 22 && res <= 23) {
    ruse = 'Perfect';
  } else if (res > 23 && res < 25) {
    ruse = 'Normal';
  } else if (res > 24 && res <= 25) {
    ruse = 'Slightly OverWeight';
  } else if (res > 25) {
    ruse = 'OverWeight';
  } else if (height >= 9) {
    noth = 'Not a Human';
  } else if (width >= 670) {
    noth = 'Not a Human';
  } else if (width <= 670) {
    noth = 'Nice';
  } else if (height <= 9) {
    noth = 'Nice';
  }

  var noth;
  if (height >= 9) {
    noth = 'Not a Human';
  } else if (width >= 670) {
    noth = 'Not a Human';
  } else if (width <= 670) {
    noth = '';
  } else if (height <= 9) {
    noth = '';
  }
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',
          backgroundColor: colors.bgcolor.innerview,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View>
          <Text style={{alignSelf: 'center', fontSize: 30}}> Weight </Text>
          <Input value={width} setValue={setWidth} />
        </View>
        <Text
          style={{
            fontSize: 43,
            marginVertical: 60,
            color: colors.color.number,
          }}>
          *
        </Text>
        <View>
          <Text style={{alignSelf: 'center', fontSize: 30}}> Height </Text>
          <Input value={height} setValue={setHeight} />
        </View>
      </View>
      <View style={styles.Resultcontainer}>
        <Text style={styles.Result}>{res}</Text>
        <Text style={styles.Resultt}>{ruse}</Text>
        <Text style={styles.Resultt}>{noth}</Text>
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
  Resultt: {
    color: '#Fa1',
    fontFamily: 'fantasy',
    fontSize: 30,
  },
});
