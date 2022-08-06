import React, { FC, useState } from "react";


import { NativeBaseProvider } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";

import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Bottomtab">
import { useNavigation } from "@react-navigation/native";
import { Lighttext, Mainholder, Maintext, Buttonholder } from "../Styles/Congrats";
import { StackNavigationProp } from '@react-navigation/stack';
const Congratsscreen: FC = () => {
    const navigation = useNavigation<Authtype>();
    return (
        <NativeBaseProvider> 
            <Maincontainer>
                <Mainholder>
                    <Maintext>
                        Congratulations!
                    </Maintext>
                    <Lighttext>
                        Your account has been created successfully
                    </Lighttext>
                </Mainholder>
                <Buttonholder>
                    <Button title="Go to Home" onPress={() => { navigation.navigate("Bottomtab") }} /></Buttonholder>
            </Maincontainer>
        </NativeBaseProvider>
    );
};

export default Congratsscreen;

