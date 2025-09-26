import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { fontScale, horizontalScale, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    tab:{
        backgroundColor : '#2979F2',
        height : verticalScale(50),
        justifyContent : 'center',
        borderRadius : horizontalScale(50)
    },
    inactiveTab:{
        backgroundColor : '#f3f5f9'
    },
    inactiveTitle:{
        color : '#79869F'
    },
    title :{
        fontFamily : getFontFamily(undefined,500),
        lineHeight : fontScale(17),
        fontSize : fontScale(14),
        color : '#ffffff',
        textAlign : 'center'
    }
})

export default styles;