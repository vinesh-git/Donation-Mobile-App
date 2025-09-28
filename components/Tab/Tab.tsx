import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { buttonType } from '../../interface/buttonType'
import style from './style'
import { tabType } from '../../interface/tabType'
import { horizontalScale } from '../../assets/styles/scaling'

const Tab = ({title,isInActive,onPress,tabId}:tabType) => {
  const tabRef = useRef(null);
  const [width,setWidth] = useState(0);
  const paddingHorizontal = 33;
  const tabWidth = {
    width : horizontalScale(paddingHorizontal * 2 + width)
  }
  return (
    <Pressable
            style={[style.tab,isInActive && style.inactiveTab,tabWidth]}
            onPress={()=> onPress?.(tabId)}>
      <Text ref={tabRef} 
            onTextLayout={(event)=>{setWidth(event.nativeEvent.lines[0].width)}}
            style={[style.title,isInActive && style.inactiveTitle]}>
              {title}
            </Text>
    </Pressable>
  )
}

export default Tab

