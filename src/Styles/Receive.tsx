import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";




export const Mainholder = styled.View` 
margin-top: ${hp("1.5%")};
`

export const Headingtext = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px; 

text-align: center; 

color: #FFFFFF;

`

export const Rowholders = styled.View`
margin-top: ${hp("5%")};
flex-direction: row;
justify-content: space-between;
padding-left: ${wp("2.5%")};
padding-right: ${wp("2.5%")};

`

export const Qrtext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px; 

letter-spacing: 0.5px;
width: ${wp("30%")};

color: #FFFFFF;
margin-left: ${wp("7.5%")};
line-height: 20px;

`

export const Copyholder = styled.View`
    margin-top: ${hp("2%")};

`

export const Secondrow = styled.View`
    
 
`

export const Copytext = styled.Text`
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #469FE5;
margin-left: ${wp("4%")};


`

export const Buttonholders = styled.View`
    margin-top: ${hp("10%")};
    flex-direction: row;
    justify-content: space-around;
    margin-left: ${wp("2.5%")};
    margin-right: ${wp("2.5%")};
    
`

export const Chooseasset = styled.Text` font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;  
color: #B0B0B0;
margin-top: ${hp("5.5%")};


`

export const Enteramounttext = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
color: #E5E5E5;
margin-top: ${hp("8%")};


`

export const Coinamount = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 42px; 
align-self: center;
text-align: center;
color: #FFFFFF;
margin-top: ${hp("5%")};


`

export const Moneyamount = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px; 
letter-spacing: 0.2px; 

color: #FFFFFF;
align-self: center;
text-align: center;
margin-top: ${hp("1%")};
`

export const Detailtext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px; 
text-align: center;
letter-spacing: 0.2px;

color: #FFFEFE;

opacity: 0.7;
align-self: center;
text-align: center;
margin-top: ${hp("3%")};
`

export const Linktext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
text-align: center;
letter-spacing: 0.2px;

color: #3D99EE;
text-align: center;
margin-top: ${hp("3%")};

`