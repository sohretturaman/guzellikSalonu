import {Dimensions, Image, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { RouterNames } from '../../config';
import { Categories, Home, Profile, Schedule } from '../../screens';
import { COLORS } from '../../assets';
import { calendar_fill, calendar_outline, category_fill, category_outline, home_fill, home_outline, user_fill, user_outline } from '../../assets/icons';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
 const winWidth = Dimensions.get("window").width;
 const winHeight = Dimensions.get("window").height;
const BottomTabNavigation = () => {
   
const IconSize = winWidth * 0.06
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          position: 'absolute',
          bottom: winWidth * 0.03,
          right: winWidth * 0.04,
          left: winWidth * 0.04,
          height: winHeight * 0.06,
          borderRadius: winWidth * 0.05,
          shadowColor: "#000",
          elevation:2
          ,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
        },
      }}>
      <Tab.Screen
        name={RouterNames.DRAWER_HOME}
        options={{
          tabBarIcon: ({color,focused}) => (
            <Icon name={focused? 'home' : 'home-outline'} size={IconSize} color={COLORS.white} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen name={RouterNames.SCHEDULE} component={Schedule}
        options={{
          tabBarIcon: ({color,focused}) => (
            <Icon name={focused? 'calendar' : 'calendar-outline'} size={IconSize} color={ COLORS.white} />
          ),
        }}
      />
      <Tab.Screen name={RouterNames.CATEGORIES} component={Categories}
        options={{
          tabBarIcon: ({color,focused}) => (
            <Icon   name={focused? 'list' : 'list-outline'} size={IconSize} color={ COLORS.white} />
          ),
        }}
      />
      <Tab.Screen name ={RouterNames.PROFILE} component={Profile}
        options={{
          tabBarIcon: ({color,focused}) => (
            <MaterialCommunityIcons name= {focused? 'account-circle' :'account-circle-outline'} size={IconSize} color={ COLORS.white } />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
