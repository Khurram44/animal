import React, { FC, useState } from "react";

import { View,TouchableOpacity, ScrollView ,Image} from "react-native";   
import { NativeBaseProvider,Input } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";
import { Toptext } from "../Styles/TokenScreen";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Buttonholder,} from "../Styles/AddRecepient";
import ConfirmPaymentD from "../components/ConfirmPaymentD";
import { MainView } from "../Styles/ConfirmPayments";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Bottomtab">
import { useNavigation } from "@react-navigation/native";
import { Mainholder } from "../Styles/Bnbcard";

import { StackNavigationProp } from '@react-navigation/stack';
const ConfirmPayment=[
    {
        id:1,
        coin:'Etherium',
        amount:'2.3686 ETH',
        paywith:'6757876788',
        price:'$657/ETH',
        usd:"$1632.44",
        fee:'$67.61',
        image:require('../assets/images/Ether.png'),
        logo:require('../assets/images/Visa.png'),
        cardnumber:'678686888678'

    }
]

const Summary: FC = () => {     


    const navigation = useNavigation<Authtype>();

   

    return (       
        <NativeBaseProvider>                 
            <Maincontainer>              
            <Mainholder>                                                                      
                    <TouchableOpacity onPress={() => navigation.goBack()}>                  
                    <AntDesign name="arrowleft" size={23} color={'#fff'} style={{}}/>
                    </TouchableOpacity>             
                    <Toptext>Confirm Payment</Toptext>           
                    <View></View>                       
                                            
                </Mainholder> 
                <MainView>                                               
                    <ConfirmPaymentD data={ConfirmPayment}/>
                    </MainView> 
                <Buttonholder>                
                    <Button title="Pay"  onPress={() => { navigation.navigate("BuyVerify") }}/></Buttonholder>      
                </Maincontainer>
                </NativeBaseProvider>
    )
}
export default Summary;