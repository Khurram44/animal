import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Maincontainer = styled.View`
   
background-color:#171E29; 
flex: 1;
justify-content: center;
align-items: center;

    
`
export const Imagecontain = styled.Image`
       
align-self: center;       
justify-content: center;    
align-items: center; 
width: 109px;              
height: 160.18px;                                

    
`

export const Mainholder = styled.View`  
margin-top: ${hp("25%")};
`

export const Maintext = styled.Text`  
    font-family: 'Poppins';  
font-style: normal;
font-weight: 700;
font-size: 20px; 
  text-align: center;

color: #FFFFFF;
margin-top: ${hp("5%")};




`

export const Buttonholder = styled.View`
    
    align-self: center;
    justify-content: center;
    align-items: center; 
    margin-top: ${hp("10%")};
`

export const Lighttext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px; 
text-align: center;
letter-spacing: 0.2px; 

color: #B0B0B0;

opacity: 0.7;
margin-top: ${hp("2%")};

`
