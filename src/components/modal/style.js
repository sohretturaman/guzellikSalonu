import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container:{
    height: winHeight,
    width: winWidth,
    backgroundColor: '#0A0A0A80',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
,
text: {
    color: 'black',
    fontSize: winWidth * 0.05,
    fontWeight: '500',
},
innerContainer:{
    height: winHeight * 0.6,
    width: winWidth * 1,
    borderTopRightRadius: winWidth * 0.04,
     borderTopLeftRadius: winWidth * 0.04,
    backgroundColor: 'white',
    alignItems:"center",
    padding:winWidth*0.05,
    
  },
  textInputContainer:{
    marginTop:winWidth*0.05
  }
});
export default styles;