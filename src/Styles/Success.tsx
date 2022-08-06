import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
 
export const Mainholder = styled.View`
margin-top: ${hp("3.5%")};
align-self: center;

    

` 

export const Successtext = styled.Text`
    
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px; 

text-align: center; 

color: #FFFFFF;
margin-top: ${hp("3%")};

`

export const Subtext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
text-align: center;
letter-spacing: 0.2px; 

color: #B0B0B0;

opacity: 0.7;
margin-top: ${hp("3%")};
width: ${wp("60%")};
`