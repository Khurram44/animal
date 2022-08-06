
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import { LinearGradient } from "expo-linear-gradient";


import {
    useFonts,

    Poppins_400Regular,

    Poppins_600SemiBold,


} from '@expo-google-fonts/poppins';
import { Amounttext, Carddataholder, Cardroundelipse, Changeamounttext, Changetext, Moneytext } from "../Styles/Walletcard";
import { Coinamount, Coinname, Maincontainer, Mainrowholder, Secondrow, Thirdrow, Coinmoney } from "../Styles/Coinlist";
import { NativeBaseProvider, Actionsheet, useDisclose } from "native-base";

import { useState, useRef } from 'react';
import { Headertext, Mainholder } from './../Styles/Addtoken';
import { COLORS } from "../constants";
import Wallettabs from "./Wallettabs";
import Tokentabs from "./Tokentabs";
import { Forminput, Formlabel, Imageholder } from "../Styles/Customtoken";
import Button from "../components/Button"
import Successful1 from "./Successful1";
import Successful3 from "./Successful3";
import Successful2 from "./Successful2";
import Receive from "./Receive";
import { Buttonholder } from "../Styles/Tokensearch";

interface Props {
    data: {
        id: number;
        amount: string;
        money: string
        image?: any
        name: string
    }[];
}


const Tabsdata = [
    {
        id: 1,
        name: "Search"
    },
    {
        id: 2,
        name: "Custom Token"
    }
]

import { Successtext } from "../Styles/Success";
import { Subtext } from "../Styles/Success";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Signup">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
const Addtoken: FC<Props> = ({ data }) => {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    function Example() {
        const navigation = useNavigation<Authtype>();
        const [compstate, setcompstate] = useState("0")
        return <>
            {/* <Button onPress={onOpen}>Actionsheet</Button> */}

            <Actionsheet isOpen={isOpen} onClose={onClose} size="full" style={{ alignSelf: "flex-start" }} >
                <Actionsheet.Content bg={COLORS.apptheme}>
                    <View  >

                        {compstate === "0" ? <View>
                            <Headertext>
                                Add Token
                            </Headertext>
                            <Tokentabs data={Tabsdata} />
                            <TouchableOpacity style={{ marginTop: hp("5%"), alignSelf: "center" }} onPress={() => { setcompstate("1") }}>
                                <LinearGradient
                                    colors={["#469FE5", "#532DF5"]}
                                    style={{
                                        width: wp("85"),
                                        borderRadius: 15,
                                        padding: 13,
                                    }}
                                >

                                    <Text style={styles.text}>Add Tokens</Text>

                                </LinearGradient>
                            </TouchableOpacity>
                        </View> : <></>}

                        {
                            compstate === "1" ? <Successful1 /> : <></>
                        }


                        {/* <Headertext>
                            Add Collectibles
                        </Headertext> */}
                        {/* <Imageholder>
                            <Image source={require("../assets/images/Box.png")} />
                        </Imageholder>
                        <Formlabel>Address</Formlabel>
                        <Forminput placeholder="lorem ispum" placeholderTextColor={"white"} />
                        <Formlabel>ID</Formlabel>
                        <Forminput placeholder="lorem ispum" placeholderTextColor={"white"} /> */}


                    </View>
                    {/* <View style={{ marginTop: hp("5%"),marginBottom:hp("5%")}}>
                    <TouchableOpacity  >
                <LinearGradient
                    colors={["#469FE5", "#532DF5"]}
                    style={ {width: wp("85"),
                    borderRadius: 15,
                    padding: 13,
            }}
                >

                    <Text style={styles.text}>Add Collectibles</Text>

                </LinearGradient>
            </TouchableOpacity>
                         </View> */}
                    {/* <Successful1 /> */}
                    {/* <Successful2 /> */}
                    {/* <Receive /> */}
                    {/* <Successful3 /> */}

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
                <TouchableOpacity onPress={() => { onOpen() }} >
                    <LinearGradient
                        colors={["#469FE5", "#532DF5"]}
                        style={styles.gradient}
                    >

                        <Text style={styles.text}>+ Add Token</Text>

                    </LinearGradient>

                </TouchableOpacity>
                <Example />
            </Mainholder>
        );
    };
}
export default Addtoken;

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
