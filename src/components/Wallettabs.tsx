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
import Wallet from "../screens/Wallet";
import Addtoken from "./Addtoken";

interface Props {
    data: {
        id: number;
        name: string;

    }[];
}

const Tokensdata = [
    {
        id: 1,
        image: require("../assets/images/Eth.png"),
        amount: "13.123 ETH",
        money: "$302.2",
        name: "Etherium"
    }, {

        id: 2,
        image: require("../assets/images/Binance.png"),
        amount: "5.12 BNB",
        money: "$202",
        name: "Binance"
    }, {

        id: 3,
        image: require("../assets/images/Animal.png"),
        amount: "3.3 ANML",
        money: "$203",
        name: "Animal"
    },
]


const Collectiblesdata = [
    {
        id: 1,
        image: require("../assets/images/Nft.png"),
        amount: "13.123 ETH",
        money: "$302.2",
        name: "Animal NFT"
    }
]
const Wallettabs: FC<Props> = ({ data }) => {
    const [Status, setStatus] = useState<string>("Tokens");
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
                    Status === "Tokens" ? <Coinslist data={Tokensdata} />   : <Coinslist data={Collectiblesdata} />
                }
              
               </View>
        );
    };
}
export default Wallettabs;
