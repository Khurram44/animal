import React, { FC, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";



import { Box, Hidden, NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants";
import { Buttonholder, Formholder, Headingtext, Inputbox, Labels, Lowertext, Maincontainer, Passwordtext, Text1, Text2, Textinputholder } from "../Styles/Signin";
// import { type } from './../navigation/Basicappnavigation';
import Button from "../components/Button";
import Walletheader from "../components/Walletheader";
import Walletcard from "../components/Walletcard";
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Wallettransaction from "../components/Wallettransaction";
import Wallettabs from "../components/Wallettabs";
import Addtoken from "../components/Addtoken";
const Loggeduser = [
    {
        id: 1,
        name: "Queen Bee"
    }
]

const Transactiontypes = [
    {
        id: 1,
        name: "Send",
        image: require("../assets/images/Send.png")
    },
    {
        id: 2,
        name: "Receive",
        image: require("../assets/images/Upload.png")
    },
    {
        id: 3,
        name: "Buy",
        image: require("../assets/images/wallet.png")
    }
]

const Carddata = [
    {
        id: 1,
        amount: "4.26ETH",
        money: "$2,000",
        change: "+11.75"
    }
]

const Tabsdata = [
    {
        id: 1,
        name: "Tokens"
    },
    {
        id: 2,
        name: "Collectibles"
    }
]
const Wallet: FC = () => {


    return (
        <View style={styles.container}>

            <ScrollView>
                <Walletheader data={Loggeduser} />
                <Walletcard data={Carddata} />
                <Wallettransaction data={Transactiontypes} />
                <Wallettabs data={Tabsdata} />


            </ScrollView>
            <Addtoken />
        </View>

    );
};

export default Wallet;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.apptheme,
        flex: 1

    }
});
