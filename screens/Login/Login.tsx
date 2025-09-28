import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../../assets/styles/globalStyles';
import Input from '../../components/Input/Input';
import style from './style';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <ScrollView contentContainerStyle={style.container}>
        <View>
          <Header type={1} title="Welcome back" />
          <View style={style.inputComponent}>
            <Input
              label={'Email'}
              placeholder={'Enter email'}
              onChangeText={(value: string) => {
                setEmail(value);
              }}
              keyboardType={'email'}
            />
          </View>
          <View>
            <Input
              label={'Password'}
              placeholder={'. . . . . . . . . . . . . . . . . .'}
              onChangeText={(value: string) => {
                setPassword(value);
              }}
              secureTypeEntry={true}
            />
          </View>
          <View style={style.buttonComponent}>
            <Button title={'Login'} onPress={() => {}} />
          </View>
          <Pressable style = {style.pressable}>
            <Header type={3} title={"Don't have an account?"} color= {'#156cf7'}/>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
