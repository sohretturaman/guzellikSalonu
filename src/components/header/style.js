import { Dimensions, StyleSheet, Text, View } from "react-native";


const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
container: {
    width: winWidth,
    height: winHeight * 0.08,
    backgroundColor: 'white',
    paddingHorizontal: winWidth * 0.05,
    justifyContent: 'center',
}
,
text: {
    color: 'black',
    fontSize: winWidth * 0.08,
    fontWeight: '800',
}
});
export default styles;