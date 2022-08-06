import { NativeBaseProvider } from "native-base";
import React, { FC, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Sendtoken">
import { useNavigation } from "@react-navigation/native";


import {
    useFonts,

    Poppins_400Regular,

    Poppins_600SemiBold,


} from '@expo-google-fonts/poppins';
import { Actionsheet, useDisclose } from "native-base";
import QRCode from 'react-native-qrcode-svg';



import { LinearGradient } from "expo-linear-gradient";
import { Roundholder, Transactiontext } from "../Styles/Wallettransaction";
import Walletcard from "./Walletcard";
import { COLORS } from "../constants";
import Receive from "./Receive";

import { Mainholder } from './../Styles/Wallettransaction';
import { StackNavigationProp } from "@react-navigation/stack";


interface Props {
    data: {
        id: number;
        name: string;
        image?: any
    }[];
}


const Wallettransaction: FC<Props> = ({ data }) => {
    const navigation = useNavigation<Authtype>();
    const [value, setValue] = useState('dwidjkfdjbckddwidjdwidjkfdjbckddwidddwidj');
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    function Example() {

        return <>
            {/* <Button onPress={onOpen}>Actionsheet</Button> */}

            <Actionsheet isOpen={isOpen} onClose={onClose} size="full" style={{ alignSelf: "flex-start" }} >
                <Actionsheet.Content bg={COLORS.apptheme}>
                    <Receive />
                </Actionsheet.Content>
            </Actionsheet>
        </>;
    }
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,

        Poppins_600SemiBold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Mainholder>
                <View>
                    <Roundholder onPress={() => navigation.navigate("Sendtoken")} >
                        <Image source={require("../assets/images/Send.png")} />

                    </Roundholder>

                    <Transactiontext>
                        Send
                    </Transactiontext></View>

                <View>
                    <Roundholder onPress={() => { onOpen() }} >
                        <Image source={require("../assets/images/Upload.png")} />

                    </Roundholder>
                    <Transactiontext>
                        Receive
                    </Transactiontext></View>

                <View>
                    <Roundholder onPress={() => navigation.navigate("BuyCrypto")}  >
                        <Image source={require("../assets/images/wallet.png")} />

                    </Roundholder>
                    <Transactiontext>
                        Buy
                    </Transactiontext></View>

                <Example />


            </Mainholder>
        );
    };
}
export default Wallettransaction;


const styles = StyleSheet.create({
    container: {},
    text: {
        fontWeight: "600",
        fontSize: 15,
        lineHeight: 20,
        textAlign: "center",
        letterSpacing: -0.25,
        color: "#FFFFFF",
    },
    gradient: {
        width: wp("38"),
        borderRadius: 15,
        padding: 13,
        backgroundColor: 'rgba(52, 52, 52, 0.3)'


    },
    gradient2: {
        width: wp("38"),
        borderRadius: 15,
        padding: 13,
        marginLeft: wp("5%")


    },
    copiedText: {
        marginTop: 10,
        color: 'red',
    },
});

