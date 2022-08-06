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



export const MainContain = styled.View`
 flex-direction:row;
  margin-top: ${hp("2")};
 
`

export const Mainimage = styled.Image`
width: 50px;
height: 50px;
border-radius:50;
margin-left: ${wp("5")};



`
export const TitleText = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px; 
align-self:center;
align-items:center;
margin-left: ${wp("5")};






color: #B0B0B0;
margin-top: ${hp("1")};

`
export const Updateimage = styled.Image`
width: 70px;
height: 70px;
border-radius:50;
margin-left: ${wp("5")};



`
export const TitleTextNew = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px; 
align-self:center;
align-items:center;
margin-left: ${wp("5")};






color: #B0B0B0;
margin-top: ${hp("1")};

`

