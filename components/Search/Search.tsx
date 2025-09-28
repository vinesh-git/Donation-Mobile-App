import {Pressable, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import style from './style'
import { fontScale } from '../../assets/styles/scaling'

const Search = ({onSearch,placeholder}:any) => {
    const [searchText,setSearchText] = useState('');
    const inputRef = useRef<TextInput>(null);
    const handleSearch = (value : string)=>{
        setSearchText(value);
        onSearch(value);
    }
  return (
    <Pressable style={style.container} onPress={()=> inputRef.current?.focus()}>
        <FontAwesomeIcon icon={faSearch as IconProp} color='#25c0ff' size={fontScale(22)}/>
        <TextInput ref={inputRef}   
                    style={style.input} 
                    placeholder={placeholder} 
                    placeholderTextColor={'#000'}
                    onChangeText={(value) => handleSearch(value)}/>
    </Pressable>
  )
}

export default Search

