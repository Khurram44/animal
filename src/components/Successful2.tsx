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
import Button from "./Button";

import { LinearGradient } from "expo-linear-gradient";
import { Mainholder, Subtext, Successtext } from "../Styles/Success";
const Successful2: FC = () => {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,

        Poppins_600SemiBold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (

            <View>
                <Mainholder>
                    <Image source={require("../assets/images/Cryptopurse.png")} /></Mainholder>
                <Successtext>
                    Successfull
                </Successtext>
                <View style={{ justifyContent: "center", alignItems: "center" }}><Subtext>
                    Your Coin have been added to your wallet !
                </Subtext></View>

                <View style={{ marginTop: hp("10%"), marginBottom: hp("5%") }}>
                    <TouchableOpacity  >
                        <LinearGradient
                            colors={["#469FE5", "#532DF5"]}
                            style={{
                                width: wp("85"),
                                borderRadius: 15,
                                padding: 13,
                            }}
                        >

                            <Text style={styles.text}>Go to Home</Text>

                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}
export default Successful2;

const styles = StyleSheet.create({
    container: {},
    text: {
        fontWeight: "600",
        fontSize: 17,
        lineHeight: 20,
        textAlign: "center",
        letterSpacing: -0.25,
        color: "#FFFFFF",
    },
    gradient: {
        width: wp("40"),
        borderRadius: 15,
        padding: 13,


    },
});
