import { Center, NativeBaseProvider } from "native-base";
import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';

import {
    useFonts,

    Poppins_400Regular,

    Poppins_600SemiBold,


} from '@expo-google-fonts/poppins';
import { Forminput, Formlabel, Mainholder, Imageholder } from "../Styles/Customtoken";
import Button from "./Button";
const Customtoken: FC = () => {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,

        Poppins_600SemiBold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Mainholder>
                <Formlabel>Token Address</Formlabel>
                <Forminput placeholder="Lorem Ispum" placeholderTextColor={"white"} />
                <Formlabel>Token Symbol</Formlabel>
                <Forminput placeholder="Lorem Ispum" placeholderTextColor={"white"} />
                <Formlabel>Token of precison</Formlabel>
                <Forminput placeholder="Lorem Ispum" placeholderTextColor={"white"} />

                <Imageholder>
                    <Image source={require("../assets/images/ct.png")} /></Imageholder>
                    <View style = {{marginBottom:hp("25%")}}>
                <Button title="Add Token" /></View>

            </Mainholder>
        );
    };
}
export default Customtoken;
