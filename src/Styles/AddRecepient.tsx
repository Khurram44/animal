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
export const Input = styled.TextInput`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
 
letter-spacing: 0.2px; 
padding-left:${wp("3%")};

color: #FFFFFF 
`
export const Textinputholder = styled.View

    `
    width: ${wp("85%")};
    margin-top: ${hp("1%")};
    background: #171E29;
border: 1px solid #4A4A4A;
border-radius: 10px;
padding: 5px;
padding-right: ${wp("5%")};
padding-top: ${hp("1")};
padding-bottom: ${hp("1%")};
`









export const Buttonholder = styled.View`
    
align-items: center;
    margin-top: ${hp("2%")};

    flex:2
`
export const ImageView = styled.View`
    

    flex:1
`
export const ImageStyle = styled.Image`
    
position: absolute;

right:10px;
top: 10px;

`


