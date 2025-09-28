import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native';
import React, { useState } from 'react';
import { inputType } from '../../interface/inputType';
import style from './style';

const Input = ({ label, placeholder,onChangeText,keyboardType,secureTypeEntry }: inputType) => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.login}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={(text) =>{setValue(text); onChangeText(value)}}
        style={style.inputBox}
        placeholder={placeholder}
        keyboardType={keyboardType as KeyboardTypeOptions}
        placeholderTextColor={'rgba(167,167,167,0.5)'}
        secureTextEntry = {secureTypeEntry}
      />
    </View>
  );
};

export default Input;
