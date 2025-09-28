import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getFontFamily } from '../../assets/fonts/helper'
import { headerType } from '../../interface/headerType';
import { getFontScale } from 'react-native-device-info';
import { fontScale } from '../../assets/styles/scaling';

const Header = ({title,type,color,numberOfLine}:headerType) => {
    let styleToApply = styles.type1;
    switch(type){
        case 1:
            styleToApply = styles.type1;
            break;
        case 2:
            styleToApply = styles.type2;
            break;
        case 3:
            styleToApply = styles.type3;
            break;
        default :
            styleToApply = styles.type1;
            break;

    }
  return (
    <View>
      <Text numberOfLines={numberOfLine} style={[styleToApply,color && {color : color}]}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    type1 : {
        fontFamily : getFontFamily('Inter_18pt',600),
        fontSize : fontScale(24),
        lineHeight : fontScale(29),
    },
    type2 : {
        fontFamily : getFontFamily('Inter_18pt',600),
        fontSize : fontScale(18),
        lineHeight : fontScale(22)
    },
    type3 : {
        fontFamily : getFontFamily('Inter_18pt',600),
        fontSize : fontScale(16),
        lineHeight : fontScale(19)
    }
})