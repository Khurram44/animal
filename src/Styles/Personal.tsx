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

export const Mainholder = styled.View`  
margin-top: ${hp("4%")};
align-items: center;
flex:2


    
`   

export const Maintext = styled.Text`  
    font-family: 'Poppins';  
font-style: normal;
font-weight: 700;
font-size: 20px; 
  text-align: center;

color: #FFFFFF;



`
export const Backtext = styled.Text`  
    font-family: 'Poppins';  
font-style: normal;
font-weight: 400;
font-size: 14px; 
  text-align: center;

color: #B0B0B0;

letter-spacing: 0.5px; 
margin-top: ${hp("2%")};










`
export const Buttonholder = styled.View`
    
align-items: center;
flex: 2;
    margin-top: ${hp("10%")};
`


