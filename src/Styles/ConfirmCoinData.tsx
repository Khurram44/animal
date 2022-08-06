import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const TopText = styled.Text`
   
ont-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
margin-top: ${hp("3%")};
margin-left: ${wp("5%")};


letter-spacing: 0.2px;

color: #FFFFFF;


    
`
export const DirectionView = styled.View`
    
    flex-direction:row;
    margin-top: ${hp("2%")};
`
export const CoinImage = styled.Image`
width: 40px;
height: 40px;
border-radius:50px;
align-self: center;
margin-left: ${wp("5%")};



    
   
`
export const CoinText = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;

letter-spacing: 0.2px;

color: #FFFFFF;
align-self: center;

margin-left: ${wp("3%")};






    
`
export const CoinAmount = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;

letter-spacing: 0.2px;
position: absolute;
 right:0px;


color: #FFFFFF;
align-self: center;




    
`
