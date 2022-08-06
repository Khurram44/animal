import React, { FC, useState } from "react";


import { NativeBaseProvider } from "native-base";
import { View,Text,StyleSheet,TouchableOpacity,Image } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    
    Poppins_500Medium,
   
    

} from '@expo-google-fonts/poppins';


const Data=[
    {
           title:'Send',
           image: require('../assets/images/Send.png')
    },
    {
        title:'Receive',
        image: require('../assets/images/Upload.png')



    }
]

const SendReceive: FC = () => {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
   

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {




    return (
        <NativeBaseProvider>
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',padding:widthPercentageToDP('10%')}}>
           {Data.map ((data) => {
            return(
                <View>
                    <TouchableOpacity>
                <View style={styles.back}>
                    <Image source={data.image} style={styles.img}/>
                    </View>
                    </TouchableOpacity>

                 <Text style={styles.texta}>{data.title}</Text>  
                 </View>
            )
           }) }
           </View>
        </NativeBaseProvider>
    );
};
}
export default SendReceive;

const styles=StyleSheet.create({
    img:{

    },
    texta:{
        color:'#B0B0B0',   
        fontSize:14,  
        
        letterSpacing: 0.5,
        textAlign:'center',
        marginTop:hp('1%'),
        fontFamily:"Poppins_500Medium"


    },
    back:{
        width:wp('15%'),
        height:wp('15%'),

        borderRadius:50,
        alignItems:'center',
        backgroundColor:'#2A3C52',
        justifyContent:'center'

    }

})

