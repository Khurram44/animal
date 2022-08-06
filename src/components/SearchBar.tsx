import React, { FC, useState } from "react";


import { NativeBaseProvider } from "native-base";
import {View, Text,StyleSheet,TouchableOpacity,Image ,TextInput} from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    
    Poppins_400Regular,
   
    

} from '@expo-google-fonts/poppins';



interface Props {
    
    placeholder: string;
    image?:any;
    style?: any;
}
const SearchBar:FC<Props> = (props) => {
    const [search, setSearchQuery] = useState<string>('');

    

    const onChangeSearch = (query) => setSearchQuery(query);
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
   

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {




    return (
        <View style={{flex:1}}>
            <View style={styles.SectionStyle}>
    

    <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={search}
        onChangeText={onChangeSearch}
placeholderTextColor={'#B0B0B0'}


        
    />
    <Image
        source={require('../assets/images/Calendar.png')} 
        style={styles.ImageStyle}
    />
</View>
</View>
    );
};
}
export default SearchBar;

const styles=StyleSheet.create({
    ImageStyle:{
        position: 'absolute',
        right: 15,
        top:15,

       
    },
    SectionStyle:{
        backgroundColor:'#212E3E',
        width:wp('90%'),alignSelf:'center',borderRadius:10,
        padding:wp('3%'),
       


    },
    input :{
        textAlign:'left',
        marginLeft:wp('3%'),
        fontFamily:'Poppins_400Regular',
        color:'#fff'
    }   

})

