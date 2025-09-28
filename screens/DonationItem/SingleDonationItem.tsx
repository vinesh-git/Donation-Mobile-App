import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../../assets/styles/globalStyles';
import BackButton from '../../components/BackButton/BackButton';
import style from './style';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonationItem = ({ navigation, route }: any) => {
  const donationState = useSelector((state: any) => state.donations);
  console.log(
    'selectedDonationItem in single donation item screen',
    donationState.selectedDonationItem,
  );
  const categoryInformation = route.params?.categoryInformation;
  console.log(route.params);

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <ScrollView style={style.scrollView}>
        <View>
          <BackButton onPress={() => navigation.goBack()} />
          <Image
            source={{ uri: donationState.selectedDonationItem.image }}
            style={style.image}
          />
          <View style={style.badgeContainer}>
            <Badge title={categoryInformation?.name || ''} />
          </View>
          <Header title={donationState.selectedDonationItem.name} type={1} />
          <Text style={style.description}>
            {donationState.selectedDonationItem.description}
            </Text>
        </View>
      </ScrollView>
      <View style={style.buttonContainer}>
        <Button title={'Donate'} isDisable={false}/>
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
