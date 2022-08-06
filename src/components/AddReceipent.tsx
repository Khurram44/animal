import React, { FC, useState } from "react";

import { View, TouchableOpacity, ScrollView, Image, TextInput, StyleSheet } from "react-native";
import { NativeBaseProvider, Input } from "native-base";
import { Eachfield, Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";
import { Toptext } from "../Styles/TokenScreen";
import AntDesign from '@expo/vector-icons/AntDesign';
import { MainText } from "../Styles/SendTokenn.tsx";
import AddImage from "../components/ImagePicker";
import { Formholder, Labels, Inputbox } from "../Styles/Signin";
import { Textinputholder, Buttonholder, ImageStyle, ImageView } from "../Styles/AddRecepient";
import QrcodeInput from "../components/QrcodeInput";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Sendtoken">
import { useNavigation } from "@react-navigation/native";
import { Mainholder } from "../Styles/Bnbcard";


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StackNavigationProp } from "@react-navigation/stack";


const AddRecepient: FC = () => {
    const [name, setName] = useState<string>('');
    const [Address, setaddress] = useState<string>('')
    const navigation = useNavigation<Authtype>();



    const onChangeSearch = (text) => setName(text);

    return (
        <NativeBaseProvider>
            <Maincontainer>
                <Mainholder>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={23} color={'#fff'} style={{}} />
                    </TouchableOpacity>
                    <Toptext>Recepient</Toptext>
                    <View></View>

                </Mainholder>
                <MainText>Add Recepient</MainText>
                <AddImage />

                <Formholder>
                    <Labels>Name</Labels>
                    <View style={styles.SectionStyle}>


                        <TextInput
                            style={styles.input}
                            placeholder={"Name"}
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
                </Formholder>
                <Formholder>
                    <Labels>Address</Labels>
                    <Eachfield>
                        <Input marginTop={2} placeholder="Wallet Address" fontSize={15} borderRadius={10} borderWidth={1} borderColor={'#4A4A4A'} width={'90%'} placeholderTextColor={"white"} onChangeText={text => setaddress(text)} value={Address} />
                    </Eachfield>

                </Formholder>
                <View style={{ marginTop: hp('5%'), flex: 1 }}>
                    <Buttonholder>
                        <Button title="Add Recepient" onPress={() => { navigation.navigate("RecepientAddedscreen") }} /></Buttonholder>
                </View>
            </Maincontainer>
        </NativeBaseProvider>
    );
};

export default AddRecepient;
const styles = StyleSheet.create({
    ImageStyle: {
        position: 'absolute',
        right: 15,
        marginTop: hp('-4%')


    },
    SectionStyle: {
        width: wp('90%'), borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4A4A4A',
        padding: wp('2%'),
        alignSelf: 'center',
        marginTop: 5



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
