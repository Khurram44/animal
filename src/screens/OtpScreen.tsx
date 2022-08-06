import React, { FC, useState } from "react";


import { NativeBaseProvider } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Rectangle from "../components/Rectangle";
import { Mainholder, Buttonholder, Backtext } from "../Styles/Otp";
import Button from "../components/Button";
import { Text, TouchableOpacity } from "react-native";
import OtpCode from "../components/Otpcode";

import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "PersonalScreen">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

const OtpScreen: FC = () => {
    const navigation = useNavigation<Authtype>();
    return (
        <NativeBaseProvider>
            <Maincontainer>
                <Mainholder>
                    <Rectangle title="Verification code" desc="Don’t share this code with other one" />
                </Mainholder>
                <OtpCode />

                <Buttonholder>
                    <Button title="Verify" onPress={() => { navigation.navigate("PersonalScreen") }} />

                </Buttonholder>
                <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ flex: 0.5 }}>
                    <Backtext>Back</Backtext>
                </TouchableOpacity>



            </Maincontainer>
        </NativeBaseProvider>
    );
};

export default OtpScreen;

