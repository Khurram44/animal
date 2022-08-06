import { Center, NativeBaseProvider } from "native-base";
import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Signup">
import { useNavigation } from "@react-navigation/native";

import {
    useFonts,

    Poppins_400Regular,

    Poppins_600SemiBold,


} from '@expo-google-fonts/poppins';
import Button from "./Button";

import { LinearGradient } from "expo-linear-gradient";
import { Mainholder, Subtext, Successtext } from "../Styles/Success";
import { StackNavigationProp } from "@react-navigation/stack";
const Successful1: FC = () => {
    const navigation = useNavigation<Authtype>();
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
                    <Image source={require("../assets/images/Successful.png")} /></Mainholder>
                <Successtext>
                    Successfull
                </Successtext>
                <View style={{ justifyContent: "center", alignItems: "center" }}><Subtext>
                    Your coins have been added successfully !
                </Subtext></View>

                <View style={{ marginTop: hp("10%"), marginBottom: hp("5%") }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Bottomtab")} >
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
export default Successful1;

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
