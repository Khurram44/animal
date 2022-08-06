import React, { FC, useState } from "react";


import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { NativeBaseProvider, Actionsheet, useDisclose } from "native-base";
import { Amounttext, Addresstext, Imagebck, TopImage, StatusText, TopBack, AmountTextfooter, Amounttexta, Righhttext, RighttextAmount, Content, SubContent, Lefttext } from "../Styles/BottomSheet";
import DashedLine from 'react-native-dashed-line';


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import { LinearGradient } from "react-native-svg";

import {
    useFonts,

    Poppins_500Medium,
    Poppins_400Regular,



} from '@expo-google-fonts/poppins';
import { COLORS } from "../constants";
import { MainView } from "../Styles/ConfirmPayments";
import Button from "./Button";


const Data = [
    {
        title: 'Received',
        token: 'BNB',
        status: 'Confirmed',
        date: '21-08-21',
        time: '5:10 PM',
        amount: '2.8',
        total: '647.2',

    },
    {
        title: 'Send',
        token: 'BNB',
        status: 'Failed',
        date: '21-08-21',
        time: '5:10 PM',
        amount: '2.8',
        total: '647.2',

    },
    {
        title: 'Received',
        token: 'BNB',
        status: 'Confirmed',
        date: '21-08-21',
        time: '5:10 PM',
        amount: '2.8',
        total: '647.2',

    },
    {
        title: 'Send',
        token: 'BNB',
        status: 'Failed',
        date: '21-08-21',
        time: '5:10 PM',
        amount: '2.8',
        total: '647.2',

    },
    {
        title: 'Received',
        token: 'BNB',
        status: 'Pending',
        date: '21-08-21',
        time: '5:10 PM',
        amount: '2.8',
        total: '647.2',

    },
    {
        title: 'Send',
        token: 'BNB',
        status: 'Failed',
        date: '21-08-21',
        time: '5:10 PM',
        amount: '2.8',
        total: '647.2',

    },
    {
        title: 'Received',
        token: 'BNB',
        status: 'Pending',
        date: '21-08-21',
        time: '5:10 PM',
        amount: '2.8',
        total: '647.2',

    },
]

const Confirmed = [
    {
        id: 1,
        status: 'Confirmed',
        amount: '1.2232 BNB',
        usd: "$652.23",
        fee: '0.0212 BNB',
        from: 'bc1q87...34pm',
        to: '3g78pk...sd42',
        date: 'Mar 07',
        time: '10:01 AM ',
        nance: '#0',
        image: require('../assets/images/confirmed.png'),

    }
]
const confirmimg = require('../assets/images/confirm.png');
const failimg = require('../assets/images/fail.png');
const pendingimg = require('../assets/images/pending.png')




const TranactionList: FC = () => {
    const [confirm, setConfirm] = useState<string>('Confirmed');
    const [fail, setFail] = useState<string>('Failed');
    const [pending, setPending] = useState<string>('Pending');
    const [Status, setStatus] = useState("")
    console.log(Status)

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

                    <View>
                        <MainView>
                            {
                                Status === "Confirmed" ?
                                    Confirmed.map((data) => {
                                        return (
                                            <View>


                                                <View >
                                                    <TopBack>
                                                        <Imagebck>
                                                            <TopImage source={require('../assets/images/confirmed.png')} />
                                                        </Imagebck>
                                                    </TopBack>



                                                </View>

                                                <View style={{ padding: wp('3%') }}>
                                                    <Content>
                                                        <Lefttext>
                                                            Amount
                                                        </Lefttext>
                                                        <RighttextAmount>
                                                            {data.amount}
                                                        </RighttextAmount>
                                                    </Content>
                                                    <Content>
                                                        <Lefttext>
                                                            In USD
                                                        </Lefttext>
                                                        <Righhttext>
                                                            {data.usd}
                                                        </Righhttext>
                                                    </Content>
                                                    <Content>
                                                        <Lefttext>
                                                            Network Fee
                                                        </Lefttext>
                                                        <Righhttext>
                                                            {data.fee}
                                                        </Righhttext>
                                                    </Content>
                                                    <Content>
                                                        <Lefttext>
                                                            From
                                                        </Lefttext>
                                                        <View style={{ width: wp('30%') }}>
                                                            <Text style={styles.address} numberOfLines={1} ellipsizeMode="middle">{data.from}</Text>
                                                        </View>
                                                    </Content>
                                                    <Content>
                                                        <Lefttext>
                                                            To
                                                        </Lefttext>
                                                        <View style={{ width: wp('30%') }}>
                                                            <Text style={styles.address} numberOfLines={1} ellipsizeMode="middle">{data.to}</Text>
                                                        </View>
                                                    </Content>
                                                    <Content>
                                                        <Lefttext>
                                                            Date
                                                        </Lefttext>
                                                        <Righhttext>
                                                            {data.date} at {data.time}
                                                        </Righhttext>
                                                    </Content>
                                                    <Content>
                                                        <Lefttext>
                                                            Nance
                                                        </Lefttext>
                                                        <Righhttext>
                                                            {data.nance}
                                                        </Righhttext>
                                                    </Content>
                                                </View>
                                                <View style={{ width: wp('80%'), alignSelf: 'center', marginTop: hp('2%') }}>
                                                    <DashedLine dashLength={10} dashThickness={2} dashGap={5} dashColor={'#B0B0B0'} />
                                                </View>
                                                <View style={{ padding: wp('3%') }}>
                                                    <Content>
                                                        <AmountTextfooter>
                                                            Amount
                                                        </AmountTextfooter>
                                                        <SubContent>
                                                            <Amounttexta>
                                                                {data.amount}
                                                            </Amounttexta>
                                                            <Addresstext>
                                                                {data.usd}
                                                            </Addresstext>
                                                        </SubContent>
                                                    </Content>
                                                    <TouchableOpacity >
                                                        <LinearGradient
                                                            colors={["#469FE5", "#532DF5"]}
                                                            style={styles.gradient}
                                                        >

                                                            <Text style={styles.text}>View on Mainnet</Text>

                                                        </LinearGradient>
                                                    </TouchableOpacity>
                                                </View>



                                            </View>
                                        )
                                    })

                                    : <></>
                            }
                            {
                                Status === "Pending" ? <></> : <></>
                            }

                            {
                                Status === "Failed" ? Confirmed.map((data) => {
                                    return (
                                        <View>


                                            <View >
                                                <TopBack>
                                                    <Imagebck>
                                                        <TopImage source={require('../assets/images/Failed.png')} />
                                                    </Imagebck>
                                                </TopBack>



                                            </View>

                                            <View style={{ padding: wp('3%') }}>
                                                <Content>
                                                    <Lefttext>
                                                        Amount
                                                    </Lefttext>
                                                    <Text style={{ fontSize: 14, color: "#F64F4F" }}>
                                                        {data.amount}</Text>

                                                </Content>
                                                <Content>
                                                    <Lefttext>
                                                        In USD
                                                    </Lefttext>
                                                    <Righhttext>
                                                        {data.usd}
                                                    </Righhttext>
                                                </Content>
                                                <Content>
                                                    <Lefttext>
                                                        Network Fee
                                                    </Lefttext>
                                                    <Righhttext>
                                                        {data.fee}
                                                    </Righhttext>
                                                </Content>
                                                <Content>
                                                    <Lefttext>
                                                        From
                                                    </Lefttext>
                                                    <View style={{ width: wp('30%') }}>
                                                        <Text style={styles.address} numberOfLines={1} ellipsizeMode="middle">{data.from}</Text>
                                                    </View>
                                                </Content>
                                                <Content>
                                                    <Lefttext>
                                                        To
                                                    </Lefttext>
                                                    <View style={{ width: wp('30%') }}>
                                                        <Text style={styles.address} numberOfLines={1} ellipsizeMode="middle">{data.to}</Text>
                                                    </View>
                                                </Content>
                                                <Content>
                                                    <Lefttext>
                                                        Date
                                                    </Lefttext>
                                                    <Righhttext>
                                                        {data.date} at {data.time}
                                                    </Righhttext>
                                                </Content>
                                                <Content>
                                                    <Lefttext>
                                                        Nance
                                                    </Lefttext>
                                                    <Righhttext>
                                                        {data.nance}
                                                    </Righhttext>
                                                </Content>
                                            </View>
                                            <View style={{ width: wp('80%'), alignSelf: 'center', marginTop: hp('2%') }}>
                                                <DashedLine dashLength={10} dashThickness={2} dashGap={5} dashColor={'#B0B0B0'} />
                                            </View>
                                            <View style={{ padding: wp('3%') }}>
                                                <Content>
                                                    <AmountTextfooter>
                                                        Amount
                                                    </AmountTextfooter>
                                                    <SubContent>
                                                        <Text style={{ fontSize: 18, color: " #F64F4F", fontWeight: "bold" }}>
                                                            {data.amount}
                                                        </Text>


                                                        <Addresstext>
                                                            {data.usd}
                                                        </Addresstext>
                                                    </SubContent>
                                                </Content>
                                                <TouchableOpacity >
                                                    <LinearGradient
                                                        colors={["#469FE5", "#532DF5"]}
                                                        style={styles.gradient}
                                                    >

                                                        <Text style={styles.text}>View on Mainnet</Text>

                                                    </LinearGradient>
                                                </TouchableOpacity>
                                            </View>



                                        </View>
                                    )
                                }) : <></>
                            }
                        </MainView>
                    </View>


                </Actionsheet.Content>
            </Actionsheet>
        </>;
    }

    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_400Regular,



    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {




        return (
            <NativeBaseProvider>
                <View>
                    {Data.map((data) => {
                        return (
                            <View>

                                <TouchableOpacity onPress={() => {
                                    onOpen()
                                    setStatus(data.status)
                                }}>
                                    <View>

                                        <View style={styles.back}>
                                            <View style={styles.backimg}>
                                                <Image source={data.status === confirm ? confirmimg : data.status === fail ? failimg : pendingimg} style={styles.img} />
                                            </View>
                                            <View style={{ flexDirection: 'column', marginLeft: wp('3%') }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.texta}>{data.title}<Text> {data.token}</Text></Text>
                                                    <Text style={[styles.status, data.status === confirm ? styles.confirm : data.status === fail ? styles.fail : styles.pending]}>({data.status})</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={styles.date}>{data.date}</Text>
                                                    <Text style={styles.time}>{data.time}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'column', position: 'absolute', right: 0, alignSelf: 'center' }}>
                                                <Text style={styles.amount}>{data.amount}<Text>{data.token}</Text></Text>
                                                <Text style={styles.date}>${data.total}</Text>
                                            </View>

                                        </View>
                                    </View>

                                </TouchableOpacity></View>
                        )
                    })}
                </View>
                <Example />

            </NativeBaseProvider>
        );
    };
}
export default TranactionList;

const styles = StyleSheet.create({
    img: {

    },
    texta: {
        color: '#fff',
        fontSize: 14,

        letterSpacing: 0.5,
        marginTop: hp('1%'),
        fontFamily: "Poppins_400Regular",





    },
    textb: {
        color: '#fff',
        fontSize: 12,

        letterSpacing: 0.5,
        fontFamily: "Poppins_400Regular",
        marginTop: hp('1.2%'),


        marginLeft: wp('2%')
    },
    back: {
        width: wp('95%'),
        padding: wp('4%'),



        flexDirection: 'row',
        // justifyContent:'space-between'


    },
    address: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 13,
        textAlign: 'center',
        letterSpacing: 0.2,
        color: '#fff',




    },
    backimg: {
        borderRadius: 50,
        width: wp('14%'),
        height: hp('7%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212E3E'
    },
    date: {
        color: "#B0B0B0",
        fontSize: 13,
        fontFamily: "Poppins_400Regular"

    },
    time: {
        color: "#B0B0B0",
        fontSize: 13,
        marginLeft: wp('2%'),
        fontFamily: "Poppins_400Regular"


    },
    status: {
        fontSize: 12,
        alignSelf: 'center',
        marginLeft: wp('1%'),


    },
    amount: {
        color: '#fff',
        fontSize: 16,

        letterSpacing: 0.5,
        marginTop: hp('1%'),
        fontFamily: "Poppins_500Medium",

    },
    confirm: {
        color: "#0DC240"

    },
    fail: {
        color: '#F93E3E'
    },
    pending: {
        color: '#F67212'

    },
    new: {},
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
        width: wp("85"),
        borderRadius: 15,
        padding: 13,
        marginTop: hp("1.5"),

    },

})

