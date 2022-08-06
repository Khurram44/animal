import React, { FC, useState } from "react";


import { NativeBaseProvider } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Mainholder } from "../Styles/Bnbcard";
import { Toptext } from "../Styles/TokenScreen";
import { TouchableOpacity, View } from "react-native";
import SendReceive from "../components/SendReceive";
import SearchBar from "../components/SearchBar";
import { ScrollView } from "react-native-gesture-handler";
import TranactionList from "../components/TransactionList";
import BNBcard from "../components/BNBcard";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Signin">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const Carddata = [
    {
        id: 1,
        amount: "13.26 BNB",
        money: "$302.12",
        change: "+11.75"
    }
]


const TokenScreen: FC = () => {

    const navigation = useNavigation<Authtype>();



    return (
        <NativeBaseProvider>
            <Maincontainer>
                <Mainholder>
                    <TouchableOpacity >
                        <AntDesign name="arrowleft" size={23} color={'#fff'} onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                    <Toptext>BNB</Toptext>
                    <View></View>

                </Mainholder>
                <ScrollView>
                    <BNBcard data={Carddata} />

                    <SendReceive />
                    <SearchBar placeholder="Searh Transaction" />
                    <TranactionList />
                </ScrollView>






            </Maincontainer>
        </NativeBaseProvider>
    );
};

export default TokenScreen;

