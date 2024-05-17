import { View, Text,Image } from "react-native";
import React from "react";
import {  DrawerContentScrollView,
    DrawerItemList,DrawerItem } from "@react-navigation/drawer";
import styles from "./style";
import { profile } from "../../assets/images";

const CustomDrawer = (props) => {
  return (
   <DrawerContentScrollView {...props}>
     <View style={styles.container}>
        <View style={styles.imageWrapper}>
        <Image 
         source={profile}
         style={styles.profileImg}
        />
        </View>
       
        <View style={styles.textWrapper}>
        <Text style={styles.text}>
            Meryem Şöhret 
           
         </Text>
        </View>
        
     </View>
    
     <DrawerItemList {...props} />
 
       
   
   </DrawerContentScrollView>
  );
};

export default CustomDrawer;
