import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { fontScale, horizontalScale, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    Button:{
        backgroundColor : '#2979F2',
        height : verticalScale(55),
        justifyContent : 'center',
        borderRadius : horizontalScale(50)
    },
    disabled:{
        opacity : 0.5
    },
    title :{
        fontFamily : getFontFamily(undefined,500),
        lineHeight : fontScale(19),
        fontSize : fontScale(16),
        color : '#ffffff',
        textAlign : 'center'
    }
})

export default styles;