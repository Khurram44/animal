import { NativeBaseProvider } from "native-base";
import React, { FC ,useState} from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import { Amounttext, Addresstext, Imagebck, Cointext,UserImgae, AmountTextfooter, Amounttexta, Righhttext, RighttextAmount, Content, SubContent, Lefttext } from "../Styles/ConfirmPaymentDD";
import DashedLine from 'react-native-dashed-line';


import {
    useFonts,

    Poppins_400Regular,

    Poppins_600SemiBold,


} from '@expo-google-fonts/poppins';

interface Props {
    data: {
        id: number;
        coin: String,
        amount: String,
        paywith: String,
        price: String,
        usd: String,
        fee: String,
        logo?: any,
        image?: any,
        cardnumber:String


    }[];
}
const secureCardEntry = (value) =>{ 
    return value && value.replace(/.(?=.{4})/g, '*')
  }

const ConfirmPaymentD: FC<Props> = ({ data}) => {
   
   
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


                                <View style={{marginTop:hp('5%')}}>
                                    <Imagebck>
                                        <UserImgae source={require('../assets/images/Ether.png')} />
                                    </Imagebck>

                                    <Cointext>
                                        Buy {data.coin}
                                    </Cointext>
                                    <Amounttext>
                                        {data.amount}
                                    </Amounttext>
                                </View>

                                <View style={{ padding: wp('3%') }}>
                                    <Content>
                                        <Lefttext>
                                            Pay with
                                        </Lefttext>
                                        <View style={{flexDirection:'row'}}>
                                            <Image style={{width:wp('8%'),height:hp('4%'),marginTop:hp('-0.5%')}} source={require('../assets/images/Visa.png')} />

                                        <Righhttext>
                                            {secureCardEntry(data.cardnumber)}
                                        </Righhttext>
                                        </View>
                                    </Content>
                                    <Content>
                                        <Lefttext>
                                            Price
                                        </Lefttext>
                                        <Righhttext>
                                            {data.price}
                                        </Righhttext>
                                    </Content>
                                    <Content>
                                        <Lefttext>
                                            Amount in USD
                                        </Lefttext>
                                        <Righhttext>
                                            {data.usd}
                                        </Righhttext>
                                    </Content>
                                    <Content>
                                        <Lefttext>
                                            Others Fee
                                        </Lefttext>
                                        <Righhttext>
                                            {data.fee}
                                        </Righhttext>
                                    </Content>
                                </View>
                                <View style={{ width: wp('80%'), alignSelf: 'center', marginTop: hp('2%') }}>
                                    <DashedLine dashLength={10} dashThickness={2} dashGap={5} dashColor={'#B0B0B0'} />
                                </View>
                                <View style={{ padding: wp('2%') }}>
                                    <Content>
                                        <AmountTextfooter>
                                            Amount
                                        </AmountTextfooter>
                                        <Content>
                                            <Amounttexta>
                                            </Amounttexta>

                                        </Content>
                                    </Content>
                                </View>



                            </View>
                        )
                    })
                }

            </View>
        );
    };
}
export default ConfirmPaymentD;
const styles = StyleSheet.create({

    address: {




    },

})
