import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export const Mainholder = styled.View`
 margin-top: ${hp("4%")};
 align-self: center;

`

export const Formlabel = styled.Text`
    
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px; 

letter-spacing: 0.2px; 

color: #B0B0B0;
margin-top: ${hp("1%")};
`

export const Forminput = styled.TextInput`
 width: ${wp("85%")};
 border-radius: 10px;
 padding: 10px;
 font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px; 

letter-spacing: 0.2px; 

color: #FFFFFF; 
border-color:  #4A4A4A;
border-width: 1px;
margin-top: ${hp("1%")};

 `

export const Imageholder = styled.View`
    margin-top: ${hp("2.5%")};  
    justify-content: center;
    align-items: center;
    margin-bottom: ${hp("2%")};
 `