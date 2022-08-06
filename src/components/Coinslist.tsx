import { NativeBaseProvider } from "native-base";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground } from "react-native";
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
import { Amounttext, Carddataholder, Cardroundelipse, Changeamounttext, Changetext, Mainholder, Moneytext } from "../Styles/Walletcard";
import { Coinamount, Coinname, Imageholder, Maincontainer, Mainrowholder, Secondrow, Thirdrow, Coinmoney } from "../Styles/Coinlist";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Signin">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
    data: {
        id: number;
        amount: string;
        money: string
        image?: any
        name: string
    }[];
}

const Coinslist: FC<Props> = ({ data }) => {
    const navigation = useNavigation<Authtype>();

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,

        Poppins_600SemiBold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Maincontainer>
                {
                    data.map((data) => {
                        return (
                            <Mainrowholder onPress={() => navigation.navigate("Tokenscreen")}>
                                <Imageholder>
                                    <Image source={data.image} />
                                </Imageholder>
                                <Secondrow>
                                    <Coinname>{data.name}</Coinname>
                                    <Coinmoney>{data.money}</Coinmoney>
                                </Secondrow>
                                <Thirdrow>
                                    <Coinamount>
                                        {data.amount}
                                    </Coinamount>
                                </Thirdrow>
                            </Mainrowholder>
                        )
                    })
                }
            </Maincontainer>

        );
    };
}
export default Coinslist;
