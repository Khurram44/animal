import React, { FC, useState } from "react";


import { NativeBaseProvider } from "native-base";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import { MainContain, Mainimage, TitleText, Updateimage, TitleTextNew } from "../Styles/RecepientList";

import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Sendtoken">
import { useNavigation } from "@react-navigation/native";

import {
    useFonts,

    Poppins_500Medium,
    Poppins_400Regular,



} from '@expo-google-fonts/poppins';
import { StackNavigationProp } from "@react-navigation/stack";


const Data = [
    {
        id: 1,
        name: 'Jessica',
        image: require('../assets/images/Jessica.png')
    },
    {
        id: 2,
        name: 'Baker',
        image: require('../assets/images/Jessica.png')
    },
    {
        id: 3,
        name: 'Krevin',
        image: require('../assets/images/Jessica.png')
    },
    {
        id: 4,
        name: 'Jimmv',
        image: require('../assets/images/Jessica.png')
    },
    {
        id: 5,
        name: 'Jessicaa',
        image: require('../assets/images/Jessica.png')
    },
    {
        id: 6,
        name: 'Jimmvu',
        image: require('../assets/images/Jessica.png')
    },
    {
        id: 7,
        name: 'Krevinu',
        image: require('../assets/images/Jessica.png')
    },
]






const ReceipentList: FC = () => {
    const navigation = useNavigation<Authtype>();
    const [Status, setStatus] = useState('');
    function SetStatusfunc(ss) {
        setStatus(ss);
    }
    console.log("name", Status)





    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_400Regular,



    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {




        return (
            <NativeBaseProvider>
                <MainContain>
                    <TouchableOpacity onPress={() => { navigation.navigate("Addrecipient") }} >
                        <Mainimage source={require('../assets/images/Add.png')} style = {{marginTop:hp("2.5%")}}/>
                        <TitleText>Add</TitleText>


                    </TouchableOpacity>
                    <View style = {{}}>
                        <ScrollView
                            horizontal
                            style = {{}}
                        >
                            {Data.map((data) => {
                                return (
                                    <TouchableOpacity   onPress={() => SetStatusfunc(data.name)} style = {{marginTop:hp("2.5%")}}>
{/* style={[ Status === data.image ? styles.newimage : styles.img]} */}

{
    Status === data.name ?   <View style = {{marginTop:hp("-2.5%")}}>
    <Image source={data.image} style={styles.newimage} /> 
</View> :  <View>
    <Image source={data.image} style={styles.img} /> 
</View>
}

                                      

                                        <Text style={[styles.name, Status === data.name ? styles.update : styles.name]}>{data.name}</Text>





                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </MainContain>
            </NativeBaseProvider>
        );
    };
}
export default ReceipentList;
const styles = StyleSheet.create({
    newimage: {
        width: 70,
        height: 70,
        borderRadius:35,
        marginLeft:wp("5%"),
    },
    update: {
        fontSize: 13,
        color: '#fff'

    },
    name:

    {
        fontFamily: 'Poppins_400Regular',
        fontSize: 11,
        alignSelf: "center",
        alignItems: "center",
        marginLeft: wp("5"),
        color: "#B0B0B0",
        marginTop: hp("1"),

    },


    true: {

    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: wp("5"),
    }

})


