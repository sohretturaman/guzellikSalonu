import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container: {
    width: winWidth * 0.7,
    height: winWidth * 0.1,
    backgroundColor: 'white',
    paddingHorizontal: winWidth * 0.05,
    borderRadius: winWidth * 0.02,
    borderColor:'gray',
    borderWidth:winWidth * 0.001,
    marginVertical:winWidth * 0.02
}
,
textInput: {
    color: 'black',
    fontSize: winWidth * 0.04,
    fontWeight: '400',
}
});
export default styles;