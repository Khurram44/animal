import React, { FC, useState } from "react";

import { View,TouchableOpacity, ScrollView ,Image} from "react-native";   
import { NativeBaseProvider,Input } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";
import { Toptext } from "../Styles/TokenScreen";
import AntDesign from '@expo/vector-icons/AntDesign';
import { MainView ,MainViewTwo} from "../Styles/ConfirmPayments";
import ConfirmPaymentData from "../components/ConfirmPaymentData";
import ConfirmCoinData from "../components/ConfirmPaymentCoinData";
import { Buttonholder } from "../Styles/SendTokenn.tsx";


import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Sendtoken">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Mainholder } from "../Styles/Bnbcard";


const PaymentData=[
    {
        id:1,
        image:require('../assets/images/Jessica.png'),
        name:'Baker Fullbright',
        address:'0x3Dc6jihjioohoguhhhihiE9',
        amount:'1.2232 BNB',
        usd:'$652.23',
        fee:'0.0212 BNB',
        
    }
]

const Coin=[                                                                                 
    {
        id:1,
        image:require('../assets/images/Jessica.png'),
        coin:'Binance',
        coinamount:'25.123 BNB'
    }
]
                                 
const ConfirmPayment: FC = () => {     
    const navigation = useNavigation<Authtype>();


    
   

    return (       
        <NativeBaseProvider>                 
            <Maincontainer>              
            <Mainholder>                                                                      
                    <TouchableOpacity onPress={()=> navigation.goBack()}>                  
                    <AntDesign name="arrowleft" size={23} color={'#fff'} style={{}}/>
                    </TouchableOpacity>             
                    <Toptext>Confirm Payment</Toptext>           
                    <View></View>                       
                                            
                </Mainholder>    
                <ScrollView>    
                <MainView>                                               
                    <ConfirmPaymentData data={PaymentData}/>
                    </MainView>    
                    <MainViewTwo>                                                     
                    <ConfirmCoinData data={Coin}/>  
                    </MainViewTwo>               
                                            

                                   
                        
                <Buttonholder>                
                    <Button title="Next" onPress={() => { navigation.navigate("PaymentVerify") }}/></Buttonholder>       
                    </ScrollView>
            </Maincontainer>
        </NativeBaseProvider>
    );
};                                            
          
export default ConfirmPayment;

