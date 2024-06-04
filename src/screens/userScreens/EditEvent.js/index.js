import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const EditEvent = (props) => {
    const {route, navigation} = props;
    const {EventData} = route?.params;
    console.log('clg data', EventData);
  return (
    <View>
      <Text>{JSON.stringify(EventData)}</Text>
    </View>
  );
};

export default EditEvent;
