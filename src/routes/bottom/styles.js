import { Dimensions, StyleSheet, Text, View } from "react-native";

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    bottomIcon:{
        height:winWidth*0.1,
        width:winWidth*0.1,
    },
    homeIcon:{
        height:winWidth*0.08,
        width:winWidth*0.08,
    },
    calendarIcon:{
        height:winWidth*0.09,
        width:winWidth*0.09,
    }
});

export default styles;


