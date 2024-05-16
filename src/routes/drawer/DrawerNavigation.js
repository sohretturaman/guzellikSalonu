import {View, Text, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigation from '../bottom/BottomTabNavigation';
import { RouterNames } from '../../config';
import { Aboutus, Contact, FavServices, NewAppointment, PastAppts, Settings, Videos } from '../../screens';
import { home_fill, home_outline } from '../../assets/icons';


const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
      }}>
      <Drawer.Screen
        name="Main"
        options={{
          title: 'Beauty Center',
          drawerIcon: ({color,focused}) => (
            <Image
              source={focused? home_fill:home_outline}
              style={{width: 20, height: 20}}
            />
          ),
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen name={RouterNames.NEW_APPOINTMENT} component={ NewAppointment} />
      <Drawer.Screen name={RouterNames.FAV_SERVICES} component={ FavServices} />
      <Drawer.Screen name={RouterNames.PAST_APPTS} component={PastAppts} />
      <Drawer.Screen name={RouterNames.VIDEOS} component={Videos} />
      <Drawer.Screen name={RouterNames.CONTACT} component={Contact} />
      <Drawer.Screen name={RouterNames.ABOUT_US} component={Aboutus} />
      <Drawer.Screen name={RouterNames.SETTINGS} component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
