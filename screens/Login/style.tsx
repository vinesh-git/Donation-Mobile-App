import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginHorizontal : horizontalScale(24),
        justifyContent : 'center',
    },
    inputComponent:{
        marginVertical : horizontalScale(20)
    },
    buttonComponent : {
        marginVertical : verticalScale(20),
    },
    pressable:{
        alignItems : 'center',
    }
})
export default styles;