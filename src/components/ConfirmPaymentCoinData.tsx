import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import { TopText,DirectionView, CoinImage ,CoinText,CoinAmount} from "../Styles/ConfirmCoinData";


import {
    useFonts,

    Poppins_400Regular,

    Poppins_600SemiBold,


} from '@expo-google-fonts/poppins';

interface Props {
    data: {
        id: number;
        coin: string;
        coinamount: string;           
        image?: any,
        
        
    }[];
}

const ConfirmCoinData: FC<Props> = ({ data }) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,

        Poppins_600SemiBold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View>
     
                {
                    data.map((data) => {
                        return (
                            <View>
                                <TopText>By</TopText>
                                <View style={{padding:wp('2%')}}>
                                <DirectionView>
                                   <CoinImage source={require('../assets/images/currencybnb.png')}/>
                                   <CoinText>
                                    {data.coin}
                                   </CoinText>
                                   <CoinAmount>
                                    {data.coinamount}
                                   </CoinAmount>
                                </DirectionView>
                                </View>
                                </View>
                        )
                    }
                    )
                }
                </View>
        )
    }
}

export default ConfirmCoinData ;