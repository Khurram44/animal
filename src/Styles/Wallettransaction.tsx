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



export const Mainholder = styled.View` 
    margin-top: ${hp("4%")};
    flex-direction: row;
    justify-content: space-evenly;
`

export const Roundholder = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25;
    background-color:#2A3C52;
    justify-content: center;
    align-items: center;

`
export const Transactiontext = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px; 
letter-spacing: 0.2px; 

color: #B0B0B0;
text-align: center;
margin-top: ${hp("1%")};

    
`
