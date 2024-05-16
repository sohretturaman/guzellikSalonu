import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container: {
    width: winWidth,
    height: winWidth * 0.15,
    backgroundColor: 'white',
    paddingHorizontal: winWidth * 0.04,
    justifyContent: 'space-between',
    flexDirection:'row',
    alignItems:'center',
    marginVertical:winWidth * 0.02
}
,
shadow:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
},
text: {
    color: 'black',
    fontSize: winWidth * 0.045,
    fontWeight: '500',
},
innerContainer:{
    flexDirection:'row',
    alignItems:'center'
},

icon:{
    width: winWidth * 0.06,
    height: winWidth * 0.06,
    marginRight:winWidth * 0.06
},
lastIcon:{
    width: winWidth * 0.06,
    height: winWidth * 0.06,
    tintColor:'blue'
}
});
export default styles;