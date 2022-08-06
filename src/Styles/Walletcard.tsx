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



export const Mainholder = styled.TouchableOpacity`
  align-self: center;
  margin-top: ${hp("3.5")};
`

export const Cardroundelipse = styled.View`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    background-color: rgba(172, 237, 230, 0.2);
    align-self: flex-end;
    opacity: 10;
    justify-content: center;
    align-items: center;
    margin-top: ${hp("2.5")};
    align-self: center;
    margin-left: ${wp("55%")};
    
    
    
`

export const Amounttext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 42px; 

color: #FFFFFF;

`
export const Moneytext = styled.Text`

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px; 

color: #FFFFFF;

`

export const Changetext = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 15px;
/* identical to box height */

text-transform: uppercase;

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.7;

    
`

export const Changeamounttext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 20px;
/* identical to box height */


color: #0DC240;
`

export const Carddataholder = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${hp("2.5%")};
    padding-right: ${wp("5%")};
    padding-left: ${wp("7.5%")};
`
export const Carddata = styled.View`
    
    padding-right: ${wp("5%")};
    padding-left: ${wp("7.5%")};
`