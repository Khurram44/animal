import React, { FC, useState } from "react";

import { View, TouchableOpacity, ScrollView } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";
import { Toptext } from "../Styles/TokenScreen";
import { Mainholder } from "../Styles/Bnbcard";

import AntDesign from '@expo/vector-icons/AntDesign';
import { MainText, SubText, SubbText, Buttonholder } from "../Styles/SendTokenn.tsx";
import SendCard from "../components/SendCard";


import ReceipentList from "../components/ReceipentList";
import AmountCard from "../components/AmountCard";



import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Sendtoken">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";



const Carddata = [
    {
        id: 1,
        amount: "13.26 BNB",
        money: "$302.12",
    }
]
 
const SendToken: FC = () => {
    const navigation = useNavigation<Authtype>();

   
    return (
        <NativeBaseProvider>
            <Maincontainer>
                <Mainholder>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <AntDesign name="arrowleft" size={23} color={'#fff'} style={{}} />
                    </TouchableOpacity>
                    <Toptext>Send Token</Toptext>
                    <View></View>

                </Mainholder>
                <ScrollView
                >
                    <MainText>Send Token</MainText>
                    <SendCard data={Carddata} />
                    <SubText>Receipent</SubText>
                    <ReceipentList />
                    <SubbText>Amount</SubbText>
                    <AmountCard balance = "122.2" />


                    <Buttonholder>
                        <Button title="Next"  onPress={() => { navigation.navigate("ConfirmPayment") }}/></Buttonholder>
                </ScrollView>
            </Maincontainer>
        </NativeBaseProvider>
    );
};

export default SendToken;

