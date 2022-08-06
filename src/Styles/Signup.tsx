import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
 
export const Lowertext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px; 

text-align: center;
letter-spacing: 0.2px;
 

color: #B0B0B0;
margin-top: ${hp("2")};
 text-align: center;
 margin-right: ${wp("10.5")};

` 