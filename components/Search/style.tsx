import { StyleSheet } from "react-native";
import { fontScale, horizontalScale, verticalScale } from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ccc',
        borderRadius:horizontalScale(15),
        padding:8,
        backgroundColor:'#f3f3f9',
        height : verticalScale(50),
    },
    input:{
        flex:1,
        marginLeft:horizontalScale(6),
        fontSize:fontScale(16),
        lineHeight:fontScale(16),
        fontFamily : getFontFamily('Inter_16pt',400),
        height:'100%',
        color:'#000'
    }
})

export default style;