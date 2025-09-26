import { View,Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import style from "../../assets/styles/globalStyles";
import { horizontalScale } from "../../assets/styles/scaling";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Home = () => {
    return (
        <SafeAreaView style={[style.flex,style.backgroundWhite]}>
            <View>
                <Header title={'Vinesh'} type = {1} />
                <FontAwesomeIcon icon={faSearch as IconProp}/>
            </View>
        </SafeAreaView>
    )
}   

export default Home;