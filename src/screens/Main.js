import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

export default function main({navigation}) {
  return (
    <View style={styles.fullscreen}>
      <View style={styles.textcontainor}>
        <Text style={styles.cal}> CALCULATOR</Text>
      </View>
      <View style={styles.buc}>
        <View style={styles.fcb}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.tcb}>
            <Text> Mental math </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Sub')}
            style={styles.tcb}>
            <Text> SUBSTRACTION </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fcb}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Multi')}
            style={styles.tcb}>
            <Text> Multiplication </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Div')}
            style={styles.tcb}>
            <Text> Division </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fcb}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Sqr')}
            style={styles.tcb}>
            <Text> Square </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cube')}
            style={styles.tcb}>
            <Text> Cube </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fcb}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Bmi')}
            style={styles.tcb}>
            <Text> BMI </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    backgroundColor: colors.bgcolor.main,
  },
  textcontainor: {
    flex: 0.2,
    justifyContent: 'center',
  },
  buc: {
    flex: 0.8,
  },
  cal: {
    fontFamily: 'fantasy',
    fontSize: 30,
    alignSelf: 'center',
  },
  tcb: {
    borderColor: colors.color.textinput,
    borderWidth: 0.5,
    height: 75,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.bgcolor.innerview,
    borderRadius: 10,
    margin: 25,
  },
  fcb: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
