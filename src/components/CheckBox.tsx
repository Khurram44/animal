import React, { FC, useState } from "react";

import { View, TouchableOpacity, ScrollView, Image, StyleSheet, ImageBackground, Text } from "react-native";
import { NativeBaseProvider, Input,Checkbox } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const Data=[
    {
        id:1,
        image:require('../assets/images/check1.png'),
        value:'0'
    },
    {
        id:2,
        image:require('../assets/images/check2.png'),
        value:'1'

    },
    {
        id:3,
        image:require('../assets/images/check3.png'),
        value:'2'

    },
    {
        id:4,
        image:require('../assets/images/check4.png'),
        value:'3'

    },
]

const radio_props = [
    {value: 0 },
    { value: 1 },
    {value:2},
    {value:3},

  ];
const CheckBox: FC = () => {
    let [service, setService] = React.useState("");




    return (
        <NativeBaseProvider>
            <View style={{marginTop:hp('3%')}}>
            <View style={{flexDirection:'row',
                    justifyContent:'space-around',
                    flexWrap:'wrap',}}>

            {
                    Data.map((data) => {
                        return (
                    <View style={styles.back}>
                    <View style={styles.backimg}>
                        <Image source={data.image}/>

                    </View>
                    <View style={{marginTop:hp('2%')}}>
                       
                                <Checkbox value={data.value} size="sm" borderRadius={50} borderWidth={1} />

                            

                    </View>

                    </View>
                        )
                    }
                    )}
                                    </View>

            
            </View>
        </NativeBaseProvider>
    )
}
export default CheckBox;

const styles = StyleSheet.create({
    back:{
        width:wp('20%'),
        backgroundColor:'#212E3E',
        padding:wp('3%'),
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
       
        

    },
    backimg:{
        backgroundColor:'#fff',
        borderRadius:50,
        width:wp('10%'),
        height:hp('5%'),
        justifyContent:'center',
        alignItems:'center'

    }
    
})