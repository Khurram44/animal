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

export const Nametext = styled.Text`
    
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;  

letter-spacing: 0.2px;
 

color: #FFFFFF;
margin-left: ${wp("1.5")};

`

export const Mainholder = styled.View`
    
    flex-direction: row;
    justify-content: space-between; 
    margin-top: ${hp("7.5")};
    margin-left: ${wp("4%")};
    margin-right: ${wp("4%")}; 

`
export const Welcometext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px; 

color: #FFFFFF;
margin-top: ${hp("0.5%")};
`

export const Textholder = styled.View`
    
`
export const Notificationimage = styled.Image`
    
`

export const Roundview = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    border-radius: 22.5;
    background-color:#2A3C52;
    align-self: center;
    justify-content: center;
    align-items: center;
`
 