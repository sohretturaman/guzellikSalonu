import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";
import PropTypes from 'prop-types'

const Header = (props) => {
    const {title} =props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: 'Settings'
}

export default Header;

