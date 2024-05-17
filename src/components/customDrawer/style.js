import { Dimensions, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../assets";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container: {
    width:'auto' ,
    height: winWidth * 0.45,
    alignItems:'center',
    paddingVertical:winWidth*0.05,
    borderBottomColor:COLORS.lightGray,
    borderBottomWidth:winWidth*0.001,
    justifyContent:'center',
    marginBottom:winWidth*0.01
}
,
text: {
    color: COLORS.white,
    fontSize: winWidth * 0.05,
    fontWeight: '800',
    textAlign:'center',
    margin:winWidth*0.01
   
    
},
imageWrapper:{
    height:winWidth*0.3,
   // backgroundColor:'red',
    justifyContent:'center'
},
profileImg:{
    width:winWidth*0.25,
    height:winWidth*0.25,
    resizeMode:'contain',
    borderRadius:winWidth*0.3
    ,
    marginTop:winWidth*0.05
},
textWrapper:{
//  backgroundColor:'red',
    height:winWidth*0.15,
    width:'100%',
    paddingBottom:winWidth*0.01,
    justifyContent:'center',
    
},
listWrapper:{
    width:'100%',
    height:winWidth*0.6,
    backgroundColor:COLORS.darkGray,
}
});
export default styles;