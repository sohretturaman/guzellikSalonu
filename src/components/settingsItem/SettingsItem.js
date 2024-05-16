import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {settingsIcon, signIn} from '../../assets/icons';
import styles from './styles';
import   PropTypes from 'prop-types'


const SettingsItem = (props) => {
  const {icon , rightIcon, contnet,onPressFunction} =props
  return (
    <Pressable style={[styles.container, styles.shadow]} onPress={onPressFunction}>
      <View style={styles.innerContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{contnet}</Text>
      </View>
      <Image source={rightIcon} style={styles.lastIcon} />
    </Pressable>
  );
};

// ask about it 
SettingsItem.prototypes = {
  icon: PropTypes.any,
  rightIcon: PropTypes.any,
  contnet: PropTypes.string
}
SettingsItem.defaultProps = {
  icon: settingsIcon,
  rightIcon: signIn,
  contnet: 'Settings'
}
export default SettingsItem;
