import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";

import { COLORS } from './../constants/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Profile = styled.View`
    
 width: ${hp("100%")};
 height:${hp("100%")};

    
`

export const Header = styled.View`
flex: 1;
    
`

export const Footer = styled.KeyboardAvoidingView`
flex:3;
background-color:#171E29;

    
`

export const Profilename = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 26px; 
color: #FFFFFF;
text-align: center;
margin-top:${hp("1%")};

`

export const Formholder  =  styled.View`
    margin-top:${hp("5%")};
`