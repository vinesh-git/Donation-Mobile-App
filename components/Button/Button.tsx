import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { buttonType } from '../../interface/buttonType'
import style from './style'

const Button = ({title,isDisable,onPress}:buttonType) => {
  return (
    <Pressable disabled={isDisable} 
            style={[style.Button,isDisable && style.disabled]}
            onPress={onPress}>
      <Text style={style.title}>{title}</Text>
    </Pressable>
  )
}

export default Button

