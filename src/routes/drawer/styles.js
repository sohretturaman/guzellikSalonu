import { Dimensions, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../assets";

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    labelItem:{
        fontSize: winWidth*0.04, 
        fontWeight: 'bold', 
    },
    drawerStyle:{
        backgroundColor: COLORS.primary,
        width: winWidth*0.7,
        borderTopRightRadius:winWidth*0.1,
        borderBottomRightRadius:winWidth*0.1
    },
 
    
});

export default styles;


