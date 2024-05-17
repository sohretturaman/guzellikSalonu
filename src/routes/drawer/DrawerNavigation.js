import {View, Text, Image, Dimensions} from 'react-native';
import React, { useState } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigation from '../bottom/BottomTabNavigation';
import { RouterNames } from '../../config';
import { Aboutus, Contact, FavServices, NewAppointment, PastAppts, Settings, Videos } from '../../screens';
import { home_fill, home_outline } from '../../assets/icons';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../assets';
import { CustomDrawer } from '../../components';

import styles from './styles';
const Drawer = createDrawerNavigator();
const winWidth = Dimensions.get('window').width;
const DrawerNavigation = () => {
 
const IconSize = winWidth * 0.06
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props) => <CustomDrawer {...props} />} 
      screenOptions={{
        
        drawerStyle: {
          ...styles.drawerStyle
         
          
        },
        drawerActiveBackgroundColor: COLORS.white,
        drawerActiveTintColor: COLORS.primary,
        drawerInactiveTintColor: COLORS.white,
        drawerLabelStyle: {  ...styles.labelItem },
        
      }}>
      <Drawer.Screen
        name="Main"
        options={{
          title: 'Ana Sayfa',
           
          drawerIcon: ({color,focused}) => (
            <Icon name='home-outline' size={IconSize} color={focused? COLORS.primary : COLORS.white} />
          ),
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen name={RouterNames.NEW_APPOINTMENT} component={ NewAppointment}
         options={{
          title: 'Yeni Randevu',
          drawerIcon: ({color,focused}) => (
            <Icon name='calendar-outline' size={IconSize} color={focused? COLORS.primary : COLORS.white}/>
          ),
        }}
      />
      <Drawer.Screen name={RouterNames.FAV_SERVICES} component={ FavServices}
        options={{
          title: 'Favori Hizmetler',
          drawerIcon: ({color,focused}) => (
            <MaterialIcons name='favorite-outline' size={IconSize} color={focused? COLORS.primary : COLORS.white}/>
          ),
        }}
      />
      <Drawer.Screen name={RouterNames.PAST_APPTS} component={PastAppts}
        options={{
          title: 'Geçmiş Randevular',
          drawerIcon: ({color,focused}) => (
            <MaterialIcons name='history' size={IconSize} color={focused? COLORS.primary : COLORS.white}/>
          ),
        }}
      />
      <Drawer.Screen name={RouterNames.VIDEOS} component={Videos}
       options={{
        title: 'Videolar',
        drawerIcon: ({color,focused}) => (
          <MaterialIcons name='ondemand-video' size={IconSize} color={focused? COLORS.primary : COLORS.white}/>
        ),
      }}
      />
      <Drawer.Screen name={RouterNames.CONTACT} component={Contact}
       options={{
        title: 'iletişim',
        drawerIcon: ({color,focused}) => (
          <Feather name='message-square' size={IconSize} color={focused? COLORS.primary : COLORS.white}/>
        ),
      }}
      />
      <Drawer.Screen name={RouterNames.ABOUT_US} component={Aboutus}
        options={{
          title: 'Hakkımızda',
          drawerIcon: ({color,focused}) => (
            <Icon name='information-circle-outline' size={IconSize} color={focused? COLORS.primary : COLORS.white}/>
          ),
        }}
      />
      <Drawer.Screen name={RouterNames.SETTINGS} component={Settings} 
        options={{
          title: 'Ayarlar',
          drawerIcon: ({color,focused}) => (
            <Icon name='settings-outline' size={IconSize} color={focused? COLORS.primary : COLORS.white}/>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
