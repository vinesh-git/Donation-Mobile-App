import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import style from './style';

const BackButton = ({onPress}:any) => {
  return (
    <Pressable onPress={()=>onPress?.()} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft as IconProp} size={20}/>
    </Pressable>
  );
};

export default BackButton;
