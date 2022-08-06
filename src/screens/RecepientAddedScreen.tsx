import React, { FC, useState } from "react";


import { NativeBaseProvider } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";

import { useNavigation } from "@react-navigation/native";
import { Buttonholder, Imagecontain,Mainholder ,Maintext,Lighttext} from "../Styles/RecepientAdded";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Sendtoken">
import { StackNavigationProp } from "@react-navigation/stack";


const RecepientAddedscreen: FC = () => {   
    const navigation = useNavigation<Authtype>();

    return (
        <NativeBaseProvider>
            <Maincontainer>
                <Mainholder>
                    <Imagecontain source={require('../assets/images/Element.png')}/>
                    <Maintext>
                        Successfull
                    </Maintext>     
                    <Lighttext>
                    Receipent Added Successfully
                    </Lighttext>
                </Mainholder>
                <Buttonholder>
                    <Button title="Back" onPress={() => { navigation.navigate("Sendtoken") }} /></Buttonholder>
            </Maincontainer>
        </NativeBaseProvider>
    );
};

export default RecepientAddedscreen;

