import React, { FC, useState } from "react";

import { View, TouchableOpacity, ScrollView, Image, StyleSheet, ImageBackground, Text } from "react-native";
import { NativeBaseProvider, Input } from "native-base";
import { Eachfield, Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";
import { Mainholder } from "../Styles/TokenScreen";
import { Toptext } from "../Styles/TokenScreen";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Buttonholder, } from "../Styles/AddRecepient";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SelectCheckBox from "./CheckBox";
import { Formholder,Labels,Labelss } from "../Styles/Signin";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Bottomtab">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

const AddCardFields: FC = () => {
    const navigation = useNavigation<Authtype>();

    const [Name, setname] = useState<string>('');
    const [cardnum, setCardnum] = useState<string>('');
    const [expiry, setExpiry] = useState<string>('');
    const [cvc, setCvc] = useState<string>('');


    const securePasswordEntry = (value) =>{ 
        return value && value.replace(/./g, ' *')
      }






    return (
        <NativeBaseProvider>
            <View style={{marginTop:hp('3%')}}>
            <View style={styles.top}>
                <Image source={require('../assets/images/Visa.png')} style={styles.visa} />
            </View>
            <ImageBackground resizeMode="cover" style={{ width: wp("85"), height: hp("20"), alignSelf: 'center', marginTop: hp('-1%') }} imageStyle={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}
                source={require("../assets/images/Pattern.png")}>
                <View style={{ marginTop: hp('3%'), marginLeft: wp('5%') }}>
                    <Text style={styles.texta}>Card Number</Text>
                    <Text style={{}}>{securePasswordEntry(cardnum)}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', }}>

                            <Text style={styles.texta}>CARD HOLDER NAME</Text>
                            <Text style={styles.textb}>{Name}</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: wp('10%') }}>

                            <Text style={styles.texta}>VAILD</Text>
                            <Text style={styles.textb}>{expiry}</Text>
                        </View>
                        <View style={{ flexDirection: 'column',marginLeft:wp('4%')}}>
                            <TouchableOpacity onPress={() => { navigation.navigate("ScanCard") }} >
                            <MaterialCommunityIcons name="line-scan" size={27} style={styles.icon}/>
                            </TouchableOpacity>
                            <Text style={styles.textc}>Scan Card</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            </View>
            <SelectCheckBox/>
            <Formholder>          
                    <Labels>Card Holder Name</Labels>
                    <Eachfield>
                        <Input placeholder="Name" marginTop={2} color={'#fff'} fontSize={15} borderRadius={10} borderWidth={1} borderColor={'#4A4A4A'} width={'90%'} padding={2}  placeholderTextColor={"white"}  onChangeText={text => setname(text)} value={Name}/>
                        </Eachfield>
                </Formholder>  
                <Formholder>          
                    <Labels>Card Number</Labels>
                    <Eachfield>
                        <Input marginTop={2} placeholder="1234-5678-9876-8765" color={'#fff'} keyboardType="numeric" fontSize={15} borderRadius={10} borderWidth={1} borderColor={'#4A4A4A'} padding={2}  width={'90%'} placeholderTextColor={"white"}  onChangeText={text => setCardnum(text)} value={cardnum}/>
                        </Eachfield>
                </Formholder> 
                <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                    <View style={{marginLeft:wp('5%')}}>
                    <Labelss>Expiry Date</Labelss>
                        <Input marginTop={2} placeholder="24/35" color={'#fff'} keyboardType="numeric" fontSize={15} borderRadius={10} borderWidth={1} borderColor={'#4A4A4A'}   width='180%' placeholderTextColor={"white"}  onChangeText={text => setExpiry(text)} value={expiry}/>
                        </View>
                        <View style={{marginLeft:wp('35%')}}>
                    <Labelss>CVC/CVV</Labelss>
                        <Input marginTop={2} placeholder="1234" color={'#fff'}  keyboardType="numeric" fontSize={15} borderRadius={10} borderWidth={1} borderColor={'#4A4A4A'}   width='200%' placeholderTextColor={"white"}  onChangeText={text => setCvc(text)} value={cvc}/>
                        </View>
                </View> 
        </NativeBaseProvider>
    )
}
export default AddCardFields;

const styles = StyleSheet.create({
    top: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#004751',
        width: wp('85%'),
        padding: wp('2%'),
        alignSelf: 'center',


    },
    visa: {
        width: wp('16%'),
        height: hp('8%'),
        marginLeft: wp('5%')
    },
    texta: {
        fontSize: 12,
        textTransform: 'uppercase',
        color: "#171E29",
        opacity: 0.7
    },
    textb: {
        fontSize: 13,
        letterSpacing: 0.2,
        color: '#202046'


    },
    textc: {
        fontSize: 13,
        letterSpacing: 0.2,
        color: '#202046',
        alignSelf:'center',
        alignItems:'center',


    },
    icon:{
        alignSelf:'center',
        alignItems:'center',
    }
})