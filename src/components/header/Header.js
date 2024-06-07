import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./style";


const Header = (props) => {
    const {title} =props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};



export default Header;

