import { StyleSheet } from "react-native";
import { fontScale, horizontalScale, verticalScale } from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/helper";

export const style = StyleSheet.create({
    headerTextContainer:{
        marginTop : verticalScale(20),
    },
    headerContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'flex-end',
        marginHorizontal : horizontalScale(24),
    },
    headerIntroText : {
        fontSize : fontScale(16),
        color : "#636776",
        lineHeight : fontScale(19),
        fontFamily : getFontFamily('Inter_18pt',400),
        fontWeight : '400',
        marginBottom : verticalScale(5)
    },
    image : {
        width : horizontalScale(50),
        height : verticalScale(50),
    },
    search : {
        marginHorizontal : horizontalScale(24),
        marginTop : verticalScale(20),
    },
    highlightedImage : {
        width : '100%',
        height : verticalScale(130),
    },
    highlightedImageContainer : {
        marginHorizontal : horizontalScale(24),
    },
    categoriesContainer : {
        marginLeft : horizontalScale(24),
    },
    categoryHeaderContainer : {
        marginHorizontal : horizontalScale(24),
        marginBottom : verticalScale(10),
        marginTop : verticalScale(6),
    },
    donationContainer : {
        marginTop : verticalScale(20),
        marginHorizontal : horizontalScale(24),
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        rowGap : verticalScale(23),
        marginBottom : verticalScale(30),
    },
    singleDonationItem : {
        maxWidth : '49%',

    }
})