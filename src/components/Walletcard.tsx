import { NativeBaseProvider } from "native-base";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground } from "react-native";
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
import { Amounttext, Carddataholder, Cardroundelipse, Changeamounttext, Changetext, Mainholder, Moneytext } from "../Styles/Walletcard";

interface Props {
    data: {
        id: number;
        amount: string;
        money: string
        change: string
    }[];
}

const Walletcard: FC<Props> = ({ data }) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,

        Poppins_600SemiBold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Mainholder>
                <ImageBackground resizeMode="cover" style={{ width: wp("89"), height: hp("26"), borderRadius: 15 }} source={require("../assets/images/MasterCard.png")}>
                    {
                        data.map((data) => {
                            return (
                                <View>
                                    <Cardroundelipse>
                                        <Image source={require("../assets/images/Eth.png")} />

                                    </Cardroundelipse>

                                    <Carddataholder>
                                        <View>
                                            <Amounttext>
                                                {data.amount}
                                            </Amounttext>
                                            <Moneytext>
                                                {data.money}
                                            </Moneytext></View>

                                        <View style={{ marginTop: hp("4") }}>
                                            <Changetext>
                                                Change
                                            </Changetext>
                                            <Changeamounttext>
                                                {data.change}
                                            </Changeamounttext></View>
                                    </Carddataholder>

                                </View>
                            )
                        })
                    }

                </ImageBackground></Mainholder>
        );
    };
}
export default Walletcard;
