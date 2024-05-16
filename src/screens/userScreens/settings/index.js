import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { BottomTab, Header, PersonItem, SettingsItem } from "../../../components";
import {settingsIcon, signIn, heartIcon, chatIcon} from '../../../assets/icons'
import Box from "../../../components/box/Box";
import styles from "../videos/styles";
import ModalComp from "../../../components/modal/Modal";
import { pImage } from "../../../assets/images";
const SettingsScreen = () => {
    const [modalVisible,setModalVisible] = useState(false); 
    const handleOnPress = () =>{
      setModalVisible(!modalVisible)
    }
  return (
    <View style={styles.container}>
       <Header title={"Settings"}/>
       <PersonItem pImage={pImage} Icon={chatIcon} name={"Mr. Jhon Eric"} title={"Person Name"} />
       <View style={styles.innerContainer}>
       <SettingsItem contnet="Settings" icon={settingsIcon} rightIcon={signIn} />
       <SettingsItem contnet="Change password" icon={settingsIcon} rightIcon={signIn} onPressFunction={handleOnPress}/>
       <SettingsItem contnet="Settings" icon={settingsIcon} rightIcon={signIn} />
       <SettingsItem contnet="Change password" icon={settingsIcon} rightIcon={heartIcon} />
       </View>
    
       <Box />
       <BottomTab/>
       
       <ModalComp  modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  );
};

export default SettingsScreen;


