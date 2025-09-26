import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { buttonType } from '../../interface/buttonType'
import style from './style'
import { tabType } from '../../interface/tabType'
import { horizontalScale } from '../../assets/styles/scaling'

const Badge = ({title}:{title : string}) => {
  const tabRef = useRef(null);
  const [width,setWidth] = useState(0);
  const paddingHorizontal = 10;
  const tabWidth = {
    width : horizontalScale(paddingHorizontal * 2 + width)
  }
  return (
    <View style={[style.badge,tabWidth]}>
      <Text ref={tabRef} 
            onTextLayout={(event)=>{setWidth(event.nativeEvent.lines[0].width)}}
            style={[style.title]}>
              {title}
            </Text>
    </View>
  )
}

export default Badge

