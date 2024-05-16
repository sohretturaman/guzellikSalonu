import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container: {
    width: winWidth*0.7,
    height: winWidth * 0.35,
    backgroundColor: '#B3C8CF',
    paddingHorizontal: winWidth * 0.05,
    justifyContent: 'space-between',
    padding: winWidth * 0.05,
    borderRadius: winWidth * 0.02,
    alignSelf:'center'
}
,
text: {
    color: 'black',
    fontSize: winWidth * 0.04,
    fontWeight: '400',
    textAlign:'center'
},
blueText:{
    color: 'blue',
    fontSize: winWidth * 0.04,
    fontWeight: '500',
    textAlign:'center'
}
});
export default styles;