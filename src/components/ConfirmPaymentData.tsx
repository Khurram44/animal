import { NativeBaseProvider } from "native-base";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import { Amounttext, Addresstext, Imagebck, UserImgae, AmountTextfooter, Amounttexta, Righhttext, RighttextAmount, Content, SubContent, Lefttext } from "../Styles/ConfirmPaymentDataa";
import DashedLine from 'react-native-dashed-line';


import {
    useFonts,

    Poppins_400Regular,

    Poppins_600SemiBold,


} from '@expo-google-fonts/poppins';

interface Props {
    data: {
        id: number;
        amount: string;
        address: string;
        image?: any,
        name: string,
        usd: string,
        fee: string,

    }[];
}

const ConfirmPaymentData: FC<Props> = ({ data }) => {
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


                                <View >
                                    <Imagebck>
                                        <UserImgae source={require('../assets/images/Jessica.png')} />
                                    </Imagebck>

                                    <Amounttext>
                                        {data.name}
                                    </Amounttext>
                                    <View style={{ width: wp('35%'), alignSelf: 'center' }}>
                                        <Text style={styles.address} numberOfLines={1} ellipsizeMode="middle">

                                            {data.address}
                                        </Text>
                                    </View>
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
                                </View>



                            </View>
                        )
                    })
                }

            </View>
        );
    };
}
export default ConfirmPaymentData;
const styles = StyleSheet.create({

    address: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 12,
        textAlign: 'center',
        letterSpacing: 0.2,
        color: '#B0B0B0',
        margin: 4,




    },

})
