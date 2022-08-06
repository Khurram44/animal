import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
    useFonts,

    Poppins_400Regular,

    Poppins_600SemiBold,


} from '@expo-google-fonts/poppins';



export const Mainholder = styled.View`  
margin-top: ${hp("2%")};
flex-direction: row;
justify-content:space-between;
padding:12px

    
` 


export const Toptext = styled.Text`  
    font-family: 'Poppins';  
font-style: normal;
font-weight: 500;
font-size: 16px; 
 
color: #FFFFFF;
text-align: center;



`