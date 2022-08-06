import React, { FC, useState } from "react";

import { View,TouchableOpacity, ScrollView ,Image} from "react-native";   
import { NativeBaseProvider,Input } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";
import { Toptext } from "../Styles/TokenScreen";
import AntDesign from '@expo/vector-icons/AntDesign';
import Rectangle from "../components/Rectangle";
import { MainRectangle } from "../Styles/PaymentVerifyy";        
import OtpCode from "../components/Otpcode";
import { Buttonholder } from "../Styles/SendTokenn.tsx";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Sendtoken">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Mainholder } from "../Styles/Bnbcard";


                             
const BuyVerify: FC = () => {                                    
      
   
    const navigation = useNavigation<Authtype>();

    return (           
        <NativeBaseProvider>                    
            <Maincontainer>                                   
            <Mainholder>                                                                      
                    <TouchableOpacity  onPress={() => navigation.goBack()}>                                  
                    <AntDesign name="arrowleft" size={23} color={'#fff'} style={{}}/>
                    </TouchableOpacity>                      
                    <Toptext>Verify</Toptext>      
                    <View></View>                          
                                      
                </Mainholder>        
                <ScrollView>                
                <MainRectangle>                               
                    <Rectangle title="Verification code" desc="Don’t share this code with other one" />
                </MainRectangle>        
                <OtpCode />
                <Buttonholder>                  
                    <Button title="Verify" /></Buttonholder>
                </ScrollView>
                </Maincontainer>                
                </NativeBaseProvider>
    )
}
export default BuyVerify;

