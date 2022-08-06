import React, { FC, useState } from "react";

import { View,TouchableOpacity, ScrollView ,Image} from "react-native";   
import { NativeBaseProvider,Input } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";
import { Toptext } from "../Styles/TokenScreen";
import AntDesign from '@expo/vector-icons/AntDesign';
import AddCardFields from "../components/AddCardFields";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Bottomtab">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { Mainholder } from "../Styles/Bnbcard";

const AddCard: FC = () => {     


    const navigation = useNavigation<Authtype>();

   

    return (       
        <NativeBaseProvider>                 
            <Maincontainer>              
            <Mainholder>                                                                      
                    <TouchableOpacity onPress={() => navigation.goBack()}>                  
                    <AntDesign name="arrowleft" size={23} color={'#fff'} style={{}}/>
                    </TouchableOpacity>             
                    <Toptext>Add Card</Toptext>           
                    <View></View>                       
                                            
                </Mainholder>   
                <ScrollView>
                <AddCardFields/>
                <View style={{alignItems:'center',marginTop:heightPercentageToDP('3%'),flex:1,marginBottom:heightPercentageToDP('3%')}}>
                    <Button title="Add Card" onPress={() => { navigation.navigate("BuyCrypto") }} />
                    </View>
                </ScrollView>

               
                 
                </Maincontainer>
                </NativeBaseProvider>
    )
}
export default AddCard;