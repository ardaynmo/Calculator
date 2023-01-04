import {View, Text, Image} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';

export default function Splash({navigation}) {
  setTimeout(() => {
    navigation.replace('Main');
  }, 3000);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.bgcolor.simple,
        justifyContent: 'center',
      }}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUOQQ768I4o1RoR6qj0dWnVDccKvRFxlDFA&usqp=CAU',
        }}
        style={{height: 500, width: 500, alignSelf: 'center'}}
      />
    </View>
  );
}
