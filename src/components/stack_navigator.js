import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Home from '../screens/home';
import Main from '../screens/Main';
import Sub from '../screens/Substract';
import Multi from '../screens/multiplication';
import Div from '../screens/division';
import Sqr from '../screens/square';
import Cube from '../screens/cube';
import Bmi from '../screens/Bmi';

export function Stack_navigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sub" component={Sub} />
        <Stack.Screen name="Multi" component={Multi} />
        <Stack.Screen name="Div" component={Div} />
        <Stack.Screen name="Sqr" component={Sqr} />
        <Stack.Screen name="Cube" component={Cube} />
        <Stack.Screen name="Bmi" component={Bmi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
