import { NativeBaseProvider} from "native-base";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity,Text ,View} from "react-native";
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


interface Props {
    title: string;
    desc:String;
    style?: any;
}
  
const Rectangle: FC<Props> = (props) => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
   
    Poppins_600SemiBold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    return (
        <NativeBaseProvider>  
            <View style={styles.back}>
                
                    <Text style={styles.title}>{props.title}</Text>
                                    
                    <Text style={styles.desc}>{props.desc}</Text>

                    </View>
        </NativeBaseProvider>
    );
};
}
export default Rectangle;

const styles = StyleSheet.create({
    back: {
        backgroundColor:'#212E3E',
        borderRadius:15,
        padding:wp('3%'),
        width:wp('88%'),
        marginTop:hp('3%'),
        paddingHorizontal:wp('5%'),
      
    },
    title: {
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 20,            
        letterSpacing: -0.25,
        color: "#fff",
        fontFamily:'Poppins_600SemiBold',
        padding:2,
    },
    desc:{
        fontSize:12,
        color:'#B0B0B0',
        fontFamily:'Poppins_400Regular',
        padding:4

    }
    
});
