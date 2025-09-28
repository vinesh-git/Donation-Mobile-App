import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../../assets/styles/globalStyles';
import Header from '../../components/Header/Header';
import React, { useEffect, useState } from 'react';
import Search from '../../components/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { style } from './style';
import Badge from '../../components/Badge/Badge';
import { horizontalScale } from '../../assets/styles/scaling';
import Tab from '../../components/Tab/Tab';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import { updateSelectedDonationItemId } from '../../redux/reducers/Donation';
import { Routes } from '../../navigation/Routes';

const Home = ({ navigation }: any) => {
  const user = useSelector((state: any) => state.user);
  const categoryState = useSelector((state: any) => state.categories);
  const donationState = useSelector((state: any) => state.donations);
  const donationList = donationState.donations;
  const dispatch = useDispatch();
  const [filteredDonationList, setFilteredDonationList] = useState([]);
  useEffect(() => {
    const items = donationList.filter((donation: any) =>
      donation.categoryIds.includes(categoryState.selectedId),
    );
    setFilteredDonationList(items);
    console.log('items in onPress', items);
  }, [categoryState.selectedId]);
  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <ScrollView>
        <View style={style.headerContainer}>
          <View style={style.headerTextContainer}>
            <Text style={style.headerIntroText}>Hello,</Text>
            <Header
              title={user.firstName + ' ' + user.LastName + '.🖕'}
              type={1}
            />
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={style.image}
            resizeMode="contain"
          />
        </View>
        <View style={style.search}>
          <Search placeholder={'Search...'} onSearch={() => {}} />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            style={style.highlightedImage}
            resizeMode="contain"
          />
        </Pressable>
        <View style={style.categoryHeaderContainer}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categoriesContainer}>
          <FlatList
            data={categoryState.categories}
            horizontal
            renderItem={({ item }) => (
              <Tab
                tabId={item.categoryId}
                title={item.name}
                onPress={value => {
                  return dispatch(updateSelectedCategoryId(value));
                }}
                isInActive={item.categoryId != categoryState.selectedId}
              />
            )}
            keyExtractor={item => item.categoryId.toString()}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={{ width: horizontalScale(10) }} />
            )}
          />
        </View>
        <View style={style.donationContainer}>
          {filteredDonationList.length > 0 &&
            filteredDonationList.map((value: any) => {
              const categoryInformation = categoryState.categories.find(
                (val: any) => val.categoryId == categoryState.selectedId,
              );
              return (
                <View
                  key={value.donationItemId}
                  style={style.singleDonationItem}
                >
                  <SingleDonationItem
                    donationId={value.donationItemId}
                    uri={value.image}
                    donationTitle={value.name}
                    price={value.price}
                    onPress={value => {
                      dispatch(updateSelectedDonationItemId(value));
                      navigation.navigate(Routes.DonationItem, {
                        categoryInformation,
                      });
                    }}
                    badgeTitle={categoryInformation.name}
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
