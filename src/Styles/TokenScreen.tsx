import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from '@expo/vector-icons/AntDesign';


export const Maincontainer = styled.View`
   
background-color:#171E29; 
flex: 1;
justify-content: center;
align-items: center;

    
`

export const Mainholder = styled.View`  
margin-top: ${hp("4%")};
flex-direction: row; 
padding:10px

    
`


export const Toptext = styled.Text`  
    font-family: 'Poppins';  
font-style: normal;
font-weight: 500;
font-size: 16px; 
 
color: #FFFFFF;
text-align: center;



`

export const Maintext = styled.Text`  
    font-family: 'Poppins';  
font-style: normal;
font-weight: 700;
font-size: 20px; 
  text-align: center;

color: #FFFFFF;



`


export const Buttonholder = styled.View`
    
align-items: center;
flex: 2;
    margin-top: ${hp("15%")};
`


