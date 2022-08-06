import React, { FC, useState } from "react";


import { NativeBaseProvider, Select } from "native-base";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import { LinearGradient } from "expo-linear-gradient";

import {
    useFonts,

    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold



} from '@expo-google-fonts/poppins';

interface Props {
    balance: string
}


const AmountCard: FC<Props> = (props) => {
    const [token, setToken] = useState("BNB");
    const [amount, setAmount] = React.useState("");

    const Data = [
        {
            id: 1,
            balance: "233.4",
            Totalamount: amount,
            Selected: token


        }
    ]
    const handleChange = text => setAmount(text);

    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_400Regular,
        Poppins_600SemiBold



    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {




        return (
            <NativeBaseProvider>
                {Data.map((data) => {
                    return (
                        <View style={{flex:1}}>
                            <LinearGradient
                                colors={["#2861B6", "#2861B6", "#7C3FAB"]}
                                style={styles.gradient}

                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <TextInput onChangeText={handleChange} value={amount} keyboardType="numeric" placeholder="1.231" placeholderTextColor={'#fff'} style={{ color: '#fff', fontSize: 26, fontFamily: 'Poppins_600SemiBold' }} />
                                    {/* <Text style={styles.texta}>{data.amount}</Text> */}
                                    <Select backgroundColor={'#171E29'} alignSelf={'center'} fontFamily={'Poppins_600SemiBold'} color={'white'} borderWidth={0} borderRadius={20} selectedValue={token} minWidth="90" _selectedItem={{
                                    }} mt={1} onValueChange={itemValue => setToken(itemValue)}>
                                        <Select.Item label="BNB" value="BNB" />
                                        <Select.Item label="ETH" value="ETH" />

                                    </Select>

                                </View>
                            </LinearGradient>
                            <LinearGradient
                                colors={["#2861B6", "#2861B6", "#7C3FAB"]}
                                style={styles.gradient1}

                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={styles.avail}>$ {props.balance}</Text>
                                    <Text style={styles.balance}>Available Balance: ${props.balance}</Text>
                                </View>
                            </LinearGradient>
                        </View>

                    )
                })}

            </NativeBaseProvider>
        )
    }
}
export default AmountCard;
const styles = StyleSheet.create({
    gradient: {
        alignSelf: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        width: wp('89%'),
        marginTop: hp('2%'),
        justifyContent: 'center',
        padding: wp('4%'),



    },
    texta: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#fff',
        alignSelf: 'center',
        fontSize: 22
    },
    gradient1: {
        alignSelf: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: wp('89%'),
        marginTop: hp('0.3%'),
        justifyContent: 'center',
        padding: wp('2%'),
    },
    avail: {
        fontSize: 12,
        fontFamily: 'Poppins_600SemiBold',
        color: '#fff',
        opacity: 0.7

    },
    balance: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        opacity: 0.6

    }

})