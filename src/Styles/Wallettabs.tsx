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



export const Tabsheadingtext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px; 

letter-spacing: 0.2px; 

color: #B0B0B0;
margin-right: ${wp("10%")};
`

export const Tabsheadinghighlightedtext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;  

letter-spacing: 0.2px;
 

color: #FFFFFF;

margin-right: ${wp("10%")};
`

export const Tabsheadingholder = styled.View`
    flex-direction: row;
    margin-left: ${wp("7%")};
    margin-top: ${hp("4%")};

`