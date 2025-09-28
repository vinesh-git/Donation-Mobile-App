import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { fontScale, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    login :{
        fontFamily : getFontFamily('Inter_16pt',400),
        fontSize : fontScale(12),
        lineHeight : fontScale(14),
        color : '#36455a',
    },
    inputBox:{
        paddingVertical : verticalScale(12),
        borderBottomWidth : 1,
        borderBottomColor : 'rgba(167,167,167,0.5)',
        color : '#000'
    }
})
export default styles;