import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { fontScale, horizontalScale, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    badge:{
        backgroundColor : '#145855',
        height : verticalScale(22),
        justifyContent : 'center',
        borderRadius : horizontalScale(50)
    },
    title :{
        fontFamily : getFontFamily(undefined,600),
        lineHeight : fontScale(12),
        fontSize : fontScale(10),
        color : '#ffffff',
        textAlign : 'center'
    }
})

export default styles;