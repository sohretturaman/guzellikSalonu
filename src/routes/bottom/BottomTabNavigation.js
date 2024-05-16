import {Image, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { RouterNames } from '../../config';
import { Categories, Home, Profile, Schedule } from '../../screens';
import { COLORS } from '../../assets';
import { calendar_fill, calendar_outline, category_fill, category_outline, home_fill, home_outline, user_fill, user_outline } from '../../assets/icons';
import styles from './styles';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
        },
      }}>
      <Tab.Screen
        name={RouterNames.DRAWER_HOME}
        options={{
          tabBarIcon: ({color,focused}) => (
            <Image
              source={focused ? home_fill: home_outline}
              style={styles.bottomIcon}
            />
          ),
        }}
        component={Home}
      />
      <Tab.Screen name={RouterNames.SCHEDULE} component={Schedule}
        options={{
          tabBarIcon: ({color,focused}) => (
            <Image
              source={focused ? calendar_fill: calendar_outline}
              style={styles.bottomIcon}
            />
          ),
        }}
      />
      <Tab.Screen name={RouterNames.CATEGORIES} component={Categories}
        options={{
          tabBarIcon: ({color,focused}) => (
            <Image
              source={focused ? category_fill:category_outline}
              style={styles.bottomIcon}
            />
          ),
        }}
      />
      <Tab.Screen name ={RouterNames.PROFILE} component={Profile}
        options={{
          tabBarIcon: ({color,focused}) => (
            <Image
              source={focused ? user_fill: user_outline}
              style={styles.bottomIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
