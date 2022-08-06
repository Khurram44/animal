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
import { Amounttext, Carddataholder,Cardroundelipse, Carddata,Changeamounttext, Changetext, Mainholder, Moneytext } from "../Styles/Walletcarddesign";


interface Props {
    data: {
        id: number;        
        amount: string;
        money: string
    }[];
}

const SendCard: FC<Props> = ({ data }) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,

        Poppins_600SemiBold,

    });
    if (!fontsLoaded) {  
        return <AppLoading />;
    } else {
        return (
            <Mainholder>
                <ImageBackground resizeMode="cover" style={{ width: wp("90%"), height: hp("24")}}   imageStyle={{ borderRadius: 15}}
 source={require("../assets/images/cardbnb.png")}>
                    {
                        data.map((data) => {
                            return (
                                <View>
                                    <Cardroundelipse>
                                        <Image source={require("../assets/images/Binance.png")} />

                                    </Cardroundelipse>

                                    <Carddata>
                                        <View >  
                                            <Amounttext>    
                                                {data.amount}
                                            </Amounttext>
                                            <Moneytext>
                                                {data.money}
                                            </Moneytext></View>

                                       
                                    </Carddata>

                                </View>
                            )
                        })
                    }

                </ImageBackground></Mainholder>
        );
    };
}
export default SendCard;
