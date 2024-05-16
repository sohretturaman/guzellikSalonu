import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import PropTypes from 'prop-types'
const Box = (props) => {
    const {content, text}= props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing</Text>
     <Text style={styles.blueText}> nunc a imperdiet rhoncus</Text>
    </View>
  );
};
Box.prototypes={
    content: PropTypes.string,
    text: PropTypes.string
}
Box.defaultProps={
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'nunc a imperdiet rhoncus'
}

export default Box;
