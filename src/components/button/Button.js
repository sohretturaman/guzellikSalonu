import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import PropTypes from 'prop-types'
const Button = (props) => {
  const { onPressFunc,title } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPressFunc}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPressFunc: PropTypes.func,
  title: PropTypes.string
}
Button.defaultProps = {
  onPressFunc: () => {'butto is pressed'},
  title: 'Button'
}
export default Button;
