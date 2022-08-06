import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Maincontainer = styled.View`
   
   margin-left: ${wp("7")};
   margin-right: ${wp("7")};
   margin-top: ${hp("1%")};
   margin-bottom: ${hp("22.5%")};

    
`
export const Mainrowholder = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: ${hp("3.5%")}; 
`

export const Imageholder = styled.View`
width: 50px;
height: 50px;
border-radius: 25px;
background-color: #212E3E;
justify-content: center;
align-items: center;
`

export const Secondrow = styled.View`
flex-direction: column;
margin-left: ${wp("5%")};
align-self: center;

`
export const Thirdrow = styled.View`
flex-direction: column;
margin-left: ${wp("27.5%")};
align-self: center;
justify-content: center;
align-items: center;
`

export const Coinname = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;  

letter-spacing: 0.2px;

color: #FFFFFF;

`
export const Coinmoney = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px; 

letter-spacing: 0.2px;
 

color: #B0B0B0;
margin-top: ${hp("1%")};

    
`
export const Coinamount = styled.Text`
    
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px; 

text-align: center;
letter-spacing: 0.2px; 

color: #FFFFFF;
`