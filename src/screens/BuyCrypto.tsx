import React, { FC, useState } from "react";

import { View,TouchableOpacity, ScrollView ,Image,Text} from "react-native";   
import { NativeBaseProvider,Input } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";
import { Toptext } from "../Styles/TokenScreen";
import AntDesign from '@expo/vector-icons/AntDesign';
import AmountCard from "../components/AmountCard";
import { MainText } from "../Styles/SendTokenn.tsx";
import { DirectionRow ,AddCard,Direction,TextLeft,Buttonholder} from "../Styles/BuyCryptoo";
import CardSwiper from "../components/CardSwiper";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Bottomtab">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { Mainholder } from "../Styles/Bnbcard";
import { COLORS } from "../constants";


                             
const BuyCrypto : FC = () => {                                    
    const navigation = useNavigation<Authtype>();

    return (           
        <NativeBaseProvider>          

            <View style = {{flex:1,backgroundColor:COLORS.apptheme,justifyContent:"center",alignItems:"center"}}>
                <Text style = {{color:"white"}}> COMING SOON </Text>
                </View>              
            {/* <Maincontainer>                                                                     
            <Mainholder>                                                                                               
                    <TouchableOpacity onPress={() => navigation.goBack()}>                                    
                    <AntDesign name="arrowleft" size={23} color={'#fff'} style={{}}/>
                    </TouchableOpacity>                          
                    <Toptext>Buy Crypto</Toptext>          
                    <View></View>                       
                                      
                </Mainholder>           
                <ScrollView>                
                <MainText>Buy Crypto</MainText>                          
 
                    <AmountCard balance="5765"/>         
                    <DirectionRow>           
                        <TextLeft>Select a Card</TextLeft>
                        <TouchableOpacity onPress={() => { navigation.navigate("AddCard") }}>    
                        <Direction>
                        <AntDesign name="plus" size={16} color={'#B0B0B0'} style={{}}/>
                        <AddCard>Add New Card</AddCard>

                        </Direction>
                        </TouchableOpacity>
                        </DirectionRow> 

                        <CardSwiper/>            
               
                <Buttonholder>                  
                    <Button title="Preview Buy" onPress={() => { navigation.navigate("Summary") }} /></Buttonholder>
                </ScrollView>
                </Maincontainer>                 */}
                </NativeBaseProvider>
    )
}
export default BuyCrypto;

