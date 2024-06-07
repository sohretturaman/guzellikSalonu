import {View, Text, Dimensions} from 'react-native';
import React from 'react';

export default function index(props) {
  const {textColor, style, text, textSize, numberOfLines, onPress, textWight} =
    props;

  return (
    <View>
      <Text
        onPress={onPress}
        numberOfLines={numberOfLines}
        style={[
          {color: textColor, fontSize: textSize, fontWeight: textWight},
          style,
        ]}>
        {text}
      </Text>
    </View>
  );
}
