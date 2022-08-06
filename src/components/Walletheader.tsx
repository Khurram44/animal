import { NativeBaseProvider } from "native-base";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, Text, View ,Image} from "react-native";
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
import { Nametext, Textholder, Welcometext, Mainholder, Roundview, Notificationimage } from "../Styles/Walletheader";
import Walletcard from "./Walletcard";

interface Props {
    data: {
        id: number;
        name: string;
    }[];
}

const Walletheader: FC<Props> = (props) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,

        Poppins_600SemiBold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return ( 
            <View>
                <Mainholder>
                    {
                        props.data.map((data) => {
                            return (
                                <Textholder>
                                    <Nametext>
                                        Hi {data.name}
                                    </Nametext>
                                    <Welcometext> Welcome Back
                                    </Welcometext></Textholder>
                            )
                        })
                    }
<Roundview>
  <Image source={require("../assets/images/Notification.png")}/>
</Roundview>
                </Mainholder>
                </View>
        );
    };
}
export default Walletheader;
