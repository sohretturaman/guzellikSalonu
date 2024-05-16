import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "./styles";
import PropTypes from 'prop-types'
const TextInputComp = (props) => {
    const {placeholder, value, onChangeText, secureTextEntry} = props
  return (
    <View style={styles.container}>
       <TextInput 
       placeholderTextColor={'gray'}
       style={styles.textInput} placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry}/>
    </View>
  );
};

TextInputComp.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool
}
TextInputComp.defaultProps = {
  placeholder: 'Password',
  value: '',
  onChangeText: () => {'got value from text input'},
  secureTextEntry: true
}
export default TextInputComp;
