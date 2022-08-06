import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Mainholder = styled.View`  
position: absolute;   
margin-top :${hp("80.5%")} ;
align-self: center; 
    
`

export const Headertext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px; 
text-align: center; 

color: #FFFFFF;

margin-top: ${hp(".5%")};
`

export const Buttonholder = styled.View`
margin-top: ${hp("10%")};
align-self: center;

`