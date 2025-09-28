import { StyleSheet } from "react-native";
import { fontScale, horizontalScale, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({
    scrollView:{
        marginHorizontal: horizontalScale(20),
        marginTop : verticalScale(7)
    },
    image : {
        width : '100%',
        height : verticalScale(240),
        marginTop : verticalScale(12),
        marginBottom : verticalScale(24),
        borderRadius : horizontalScale(5),
    },
    badgeContainer:{
        marginBottom : verticalScale(16)
    },
    description : {
        marginTop : verticalScale(8),
        marginHorizontal : horizontalScale(8),
        fontFamily : 'Inter_16pt',
        fontWeight : '400',
        fontSize : fontScale(14),
        marginBottom : verticalScale(10),
    },
    buttonContainer : {
        marginHorizontal: horizontalScale(20),
    }
})

export default styles;