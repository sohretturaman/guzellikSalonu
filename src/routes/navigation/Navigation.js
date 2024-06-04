import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from '../drawer/DrawerNavigation';
import {RouterNames} from '../../config';
import { EditEvent } from '../../screens';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={RouterNames.DRAWER_HOME}
        component={DrawerNavigation}
      />
      <Stack.Screen name={RouterNames.EDIT_EVENT} component={EditEvent} />
    </Stack.Navigator>
  );
};

export default Navigation;
