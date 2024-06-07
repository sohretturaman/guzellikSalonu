import {Modal, StyleSheet, Text, View, Dimensions, Alert} from 'react-native';
import React, {Children, useState} from 'react';
import Button from '../button/Button';

import PropTypes from 'prop-types';
import styles from './style';
import TextInputComp from '../textInputComp/TextInputComp';

const ModalComp = props => {
  const {modalVisible, setModalVisible,children} = props;

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onDismiss={() => setModalVisible(false)}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.container}>
        {/**modal content starts here */}
        <View style={styles.innerContainer}>
           <Text> Choose an Available Hour</Text>
           {children}
        </View>
      </View>
    </Modal>
  );
};

ModalComp.propTypes = {
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
};
ModalComp.defaultPropTypes = {
  modalVisible: false,
  setModalVisible: () => {
    console.log('buton tıklandı');
  },
};
export default ModalComp;

{
  /* <View
          style={styles.innerContainer }>
          <Text style={styles.text}>Change Password</Text>
          <View style={styles.textInputContainer}>
             <TextInputComp placeholder={'new Password'} />
             <TextInputComp placeholder={'confirm Password'} /> 
        </View>
        <Button />
        </View>
         children item */
}
