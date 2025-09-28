import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#fafafa',
        height : horizontalScale(44),
        width : horizontalScale(44),
        borderRadius : horizontalScale(26),
        alignItems : 'center',
        justifyContent : 'center',
        
    }
})

export default styles;