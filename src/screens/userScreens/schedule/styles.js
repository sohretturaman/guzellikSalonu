import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container: {
    width: winWidth,
    height: winHeight*0.98 ,
    backgroundColor: '#F6F4F4',
    
},
fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: winWidth*0.2,
  },



});
export default styles;