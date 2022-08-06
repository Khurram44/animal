import React, { FC, useState, useEffect } from "react";


import { NativeBaseProvider } from "native-base";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Sendtoken">
import { useNavigation } from "@react-navigation/native";
import {
    useFonts,

    Poppins_400Regular,



} from '@expo-google-fonts/poppins';
import { StackNavigationProp } from "@react-navigation/stack";



interface Props {

    placeholder: string;
    image?: any;
    style?: any;
}
const QrcodeInput: FC<Props> = (props) => {
    const [name, setName] = useState<string>('');
    const navigation = useNavigation<Authtype>();


    const onChangeSearch = (text) => setName(text);

    // Barcode





    let [fontsLoaded] = useFonts({
        Poppins_400Regular,


    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {



        return (
            <View >
                <View style={styles.SectionStyle}>


                    <TextInput
                        style={styles.input}
                        placeholder={props.placeholder}
                        value={name}
                        onChangeText={onChangeSearch}
                        placeholderTextColor={'#fff'}



                    />
                    <TouchableOpacity onPress={() => { navigation.navigate("QrcodeScreen") }}  >
                        <MaterialCommunityIcons
                            name="line-scan" size={25} color={'#fff'}
                            style={styles.ImageStyle}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}
export default QrcodeInput;

const styles = StyleSheet.create({
    ImageStyle: {
        position: 'absolute',
        right: 15,
        marginTop: hp('-4%')


    },
    SectionStyle: {
        width: wp('85%'), borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4A4A4A',
        padding: wp('2%'),
        alignSelf: 'center'



    },
    input: {
        textAlign: 'left',
        marginLeft: wp('3%'),
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 15,

    },
    container: {
        backgroundColor: "#171E29",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

