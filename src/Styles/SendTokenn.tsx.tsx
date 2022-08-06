import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from "expo-linear-gradient";


export const Maincontainer = styled.View`
   
background-color:#171E29; 
flex: 1; 
justify-content: center;
align-items: center;

    
`  
export const MainText = styled.Text`
   
margin-left: ${wp("5%")};
margin-top: ${hp("3%")};


font-family: 'Poppins';
font-style: normal;  
font-weight: bold;
font-size: 20px;
line-height: 30px;

  
color: #FFFFFF;

    
`  
export const SubText = styled.Text`
   
margin-left: ${wp("5%")};
margin-top: ${hp("3%")};


font-family: 'Poppins';
font-style: normal;  
font-size: 18px;

  
color: #FFFFFF;

    
`   
export const SubbText = styled.Text`
   
margin-left: ${wp("5%")};
margin-top: ${hp("10%")};


font-family: 'Poppins';
font-style: normal;  
font-size: 18px;
line-height: 30px;

  
color: #FFFFFF;
   
    
`   











export const Buttonholder = styled.View`
    
align-items: center;
    margin-top: ${hp("3%")};
    margin-bottom: ${hp("3%")};
`


