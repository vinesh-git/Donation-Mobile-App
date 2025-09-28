import { Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './style';

const SingleDonationItem = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
  donationId,
  onPress,
}: donationItemType) => {
  return (
    <Pressable onPress={() => onPress?.(donationId)}>
      <View>
        <View style={style.badgeContainer}>
          <Badge title={badgeTitle} />
        </View>
        <Image resizeMode="cover" source={{ uri: uri }} style={style.image} />
      </View>
      <View style={style.textContainer}>
        <Header title={donationTitle} type={3} color={'#0a043c'} numberOfLine={1}/>
        <View style={style.priceContainer}>
          <Header title={`$ ${price}`} type={3} color={'#156cf7'} />
        </View>
      </View>
    </Pressable>
  );
};

export default SingleDonationItem;
