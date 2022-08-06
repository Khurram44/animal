import { Center, NativeBaseProvider, ScrollView } from "native-base";
import React, { FC, useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, Share } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import { Clipboard } from 'react-native'

import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Signin">
import { useNavigation } from "@react-navigation/native";
import AmountCard from "./AmountCard";


import {
    useFonts,

    Poppins_400Regular,

    Poppins_600SemiBold,


} from '@expo-google-fonts/poppins';
import Button from "./Button";
import QRCode from 'react-native-qrcode-svg';


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

import { LinearGradient } from "expo-linear-gradient";
import { Buttonholders, Chooseasset, Coinamount, Copytext, Detailtext, Enteramounttext, Headingtext, Linktext, Mainholder, Moneyamount, Qrtext, Rowholders, Secondrow } from "../Styles/Receive";
import { styled } from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Buttonholder, Checkbox, Itemholder, Listholder, Maincontentholder, Nameholder, Namemain, Rowholder, Searchfield } from "../Styles/Tokensearch";

const Receive: FC = () => {


    const [value, setValue] = useState('dwidjkfdjbckddwidjdwidjkfdjbckddwidddwidj');
    const [Link, setlink] = useState("https://nodejs.org/en/")
    const options = {
        message: value
    }
    const onShare = async () => {
        try {
            const result = await Share.share(options);
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            alert(error.message);
        }
    };




    const [copiedText, setCopiedText] = useState('');
    const navigation = useNavigation<Authtype>();
    const [Radiostate, setRadiostate] = useState(false)
    const [Status, setStatus] = useState();
    const [Amount, setAmount] = useState("1.221")
    const [name, setname] = useState("Eth")
    const [amount, setamount] = useState("232.2")
    function SetStatusfunc(ss) {
        setStatus(ss);
    }

    // const copyToClipboard = (text) => {
    // //      Clipboard.setString(text);

    // // };

    // // const fetchCopiedText = async () => {
    // //     const text = await Clipboard.getStringAsync();
    // //     setCopiedText(text);
    // // };
    // Share.open(options)
    //     .then((res) => {
    //         console.log(res);
    //     })
    //     .catch((err) => {
    //         err && console.log(err);
    //     });


    function Handlefunc() {
        if (compstate === "0") {
            return (
                <View>
                    <Headingtext>
                        Receive Crypto
                    </Headingtext>
                    <Rowholders>
                        <View style={{ padding: 7.5, backgroundColor: "white", borderRadius: 10 }}>
                            <QRCode
                                value="bbbbbbbbbcytfytcghv"
                                size={150}
                                backgroundColor={"white"}
                                logoBackgroundColor={"white"}
                                logoMargin={20}
                                logoBorderRadius={1}


                            /></View>
                        <Secondrow>
                            <Qrtext>
                                {value}
                            </Qrtext>
                            <TouchableOpacity style={{ flexDirection: "row", marginLeft: wp("7.5%"), marginTop: hp("5%") }} onPress={() => {
                                Clipboard.setString(value)
                            }} >
                                <Image source={require("../assets/images/Copy.png")} />
                                <Copytext>Copy</Copytext>
                            </TouchableOpacity>
                        </Secondrow>
                    </Rowholders>
                    {/* onPress={() => Share.open()} */}
                    <Buttonholders>
                        <TouchableOpacity style={styles.gradient} onPress={onShare}>


                            <Text style={styles.text}>Share</Text>


                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setcompstate("1") }}>
                            <LinearGradient
                                colors={["#469FE5", "#532DF5"]}
                                style={styles.gradient2}
                            >

                                <Text style={styles.text}>Request Payment</Text>

                            </LinearGradient>
                        </TouchableOpacity>
                    </Buttonholders>
                </View>
            )

        }
        else if (compstate === "1") {
            return (
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => { setcompstate("0") }}>
                            <Image source={require("../assets/images/Back.png")} style={{ marginRight: wp("20%"), alignSelf: "center" }} /></TouchableOpacity>
                        <Headingtext>
                            Request Payment
                        </Headingtext></View>
                    <Chooseasset>
                        Choose an asset to Request
                    </Chooseasset>
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
                        <Buttonholder>

                            <TouchableOpacity onPress={() => { setcompstate("2") }}>
                                <LinearGradient
                                    colors={["#469FE5", "#532DF5"]}
                                    style={{
                                        width: wp("85"),
                                        borderRadius: 15,
                                        padding: 13,
                                    }}
                                >

                                    <Text style={styles.text}>Next</Text>

                                </LinearGradient>
                            </TouchableOpacity></Buttonholder>
                    </Maincontentholder>
                </View>
            )
        }
        else if (compstate === "2") {

            return (
                <View>
                    <ScrollView>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => { setcompstate("1") }}>
                                <Image source={require("../assets/images/Back.png")} style={{ marginRight: wp("25%"), alignSelf: "center" }} /></TouchableOpacity>
                            <Headingtext>
                                Amount
                            </Headingtext></View>
                        <Chooseasset>
                            Choose an asset to Request
                        </Chooseasset>
                        <Enteramounttext>
                            Enter Amount
                        </Enteramounttext>
                        <AmountCard balance="7879" />

                        <View style={{ marginTop: hp('25%'), alignSelf: 'center' }}>

                            <TouchableOpacity onPress={() => { setcompstate("3") }}>
                                <LinearGradient
                                    colors={["#469FE5", "#532DF5"]}
                                    style={{
                                        width: wp("85"),
                                        borderRadius: 15,
                                        padding: 13,
                                    }}
                                >

                                    <Text style={styles.text}>Next</Text>

                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>)

        }
        else {
            return (
                <View>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => { setcompstate("1") }}>
                            <Image source={require("../assets/images/Back.png")} style={{ marginRight: wp("25%"), alignSelf: "center" }} /></TouchableOpacity>
                        <Headingtext>
                            Sent Link
                        </Headingtext></View>

                    <View style={{ padding: 7.5, backgroundColor: "white", borderRadius: 10, alignSelf: "center", marginTop: hp("5%") }}>
                        <QRCode
                            value={Link}
                            size={175}
                            backgroundColor={"white"}
                            logoBackgroundColor={"white"}
                            logoMargin={20}
                            logoBorderRadius={1}


                        /></View>

                    <Coinamount>{Amount}{name}</Coinamount>
                    <Moneyamount>{amount}</Moneyamount>
                    <Detailtext>Your request Link is already sent</Detailtext>
                    <Detailtext>Send this link to a friend and it will ask them to send Bnb</Detailtext>
                    <Linktext>{Link}</Linktext>

                    <Buttonholder>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={styles.gradient} onPress={() => Clipboard.setString(Link)}>


                                <Text style={styles.text}>Copy</Text>


                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginLeft: wp("10%") }} onPress={onShare}>
                                <LinearGradient
                                    colors={["#469FE5", "#532DF5"]}
                                    style={{
                                        width: wp("42"),
                                        borderRadius: 15,
                                        padding: 13,
                                        marginBottom: hp("5%")
                                    }}
                                >

                                    <Text style={styles.text}>Send Link</Text>

                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </Buttonholder>
                </View>
            )


        }
    }

    const [compstate, setcompstate] = useState("0")

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,

        Poppins_600SemiBold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (


            <Mainholder>
                {Handlefunc()}



            </Mainholder>

        );
    };
}
export default Receive;

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
