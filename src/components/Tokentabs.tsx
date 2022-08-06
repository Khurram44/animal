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
import { Nametext, Textholder, Welcometext, Mainholder, Roundview, Notificationimage } from "../Styles/Walletheader";
import Walletcard from "./Walletcard";
import { Tabsheadinghighlightedtext, Tabsheadingholder, Tabsheadingtext } from './../Styles/Wallettabs';
import Coinslist from "./Coinslist";
import Tokensearch from "./Tokensearch";
import Customtoken from "./Customtoken";

interface Props {
    data: {
        id: number;
        name: string;

    }[];
}
const Tokentabs: FC<Props> = ({ data }) => {
    const [Status, setStatus] = useState<string>("Search");
    function SetStatusfunc(ss) {
        setStatus(ss);
    }
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,

        Poppins_600SemiBold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View>
                <Tabsheadingholder>
                    {

                        data.map((data) => {
                            return (
                                <TouchableOpacity onPress={() => SetStatusfunc(data.name)}>
                                    {
                                        Status === data.name ?


                                            (
                                                <View>
                                                    <Tabsheadinghighlightedtext>{data.name}</Tabsheadinghighlightedtext>

                                                    <View
                                                        style={{
                                                            borderBottomColor: "#4BAFFD",
                                                            borderBottomWidth: 3,
                                                            width: wp("12.5"),

                                                            marginTop: hp("1%"),
                                                            marginLeft: wp("2.5%")
                                                        }}
                                                    /></View>

                                            )
                                            :


                                            <Tabsheadingtext>
                                                {
                                                    data.name
                                                }
                                            </Tabsheadingtext>
                                    }



                                </TouchableOpacity>

                            )
                        })

                    }</Tabsheadingholder>
                {
                    Status === "Search" ? <Tokensearch /> : <Customtoken />
                }


            </View>
        );
    };
}
export default Tokentabs;
