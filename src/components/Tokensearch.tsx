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
import { Buttonholder, Checkbox, Itemholder, Listholder, Maincontentholder, Nameholder, Namemain, Rowholder, Searchfield } from "../Styles/Tokensearch";
import Button from "./Button";

const Tokenslist = [
    {
        id: 1,
        image: require("../assets/images/Anml.png"),
        name: "Animal Token",
        symbol: "ANML",

    },
    {
        id: 2,
        image: require("../assets/images/Pot.png"),
        name: "Pot Coin",
        symbol: "Pot",
    },
    {
        id: 3,
        image: require("../assets/images/Grid.png"),
        name: "Grid Coin",
        symbol: "",
    },
    {
        id: 4,
        image: require("../assets/images/Cashbery.png"),
        name: "Cash bery Coin",
        symbol: "",
    },

]

const Tokensearch: FC = () => {

    const [copiedText, setCopiedText] = useState(''); 
    const [Radiostate, setRadiostate] = useState(false)
    const [Status, setStatus] = useState();
    const [Amount, setAmount] = useState("1.221")
    const [name, setname] = useState("Eth")
    const [amount, setamount] = useState("232.2")
    function SetStatusfunc(ss) {
        setStatus(ss);
    }

    function Success() {
        return (
            <Text></Text>
        )
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
                <Maincontentholder>
                    <Searchfield placeholder="Search Token" placeholderTextColor={"#B0B0B0"} />
                    <Listholder>
                        {
                            Tokenslist.map((data) => {
                                return (
                                    <Itemholder>
                                        <Rowholder>
                                            <Image source={data.image} style={{ width: 40, height: 40 }} />
                                            <Namemain>
                                                <Nameholder>{data.name} </Nameholder></Namemain>


                                            {
                                                Status === data.name ? <TouchableOpacity style={{ alignSelf: "center", marginLeft: wp("22.5%") }} onPress={() => { }}>
                                                    <Image source={require("../assets/images/Selected.png")} />
                                                </TouchableOpacity> :

                                                    <Checkbox onPress={() => { SetStatusfunc(data.name) }}>

                                                    </Checkbox>
                                            }
                                            {/* {
                                            Radiostate ?

                                                <TouchableOpacity onPress={() => { setRadiostate(false) }}>
                                                    <Image source={require("../assets/images/Selected.png")} />
                                                </TouchableOpacity> : <></>

                                        }
                                        {
                                            Radiostate === false ? <Checkbox onPress={() => { setRadiostate(true) }}>

                                            </Checkbox> : <></>
                                        } */}



                                        </Rowholder>
                                    </Itemholder>
                                )
                            })
                        }

                    </Listholder>

                </Maincontentholder>
            </View>
        );
    };
}
export default Tokensearch;
