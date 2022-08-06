

import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";



export const DirectionRow = styled.View` 
flex-direction:row;

justify-content:space-between;
padding:14px;
margin-top: ${hp("4%")};



    
`
export const Direction = styled.View`  
flex-direction:row;
margin:5px

    
`
export const AddCard = styled.Text`  
ont-family: 'Poppins';
font-style: normal;                      
font-weight: 500;
font-size: 12px;

letter-spacing: 0.2px;

color: #B0B0B0;
margin-left: ${wp("1%")};


    
`
export const TextLeft = styled.Text`  
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;

letter-spacing: 0.2px;

color: #E5E5E5;

       
`

export const Buttonholder = styled.View`
    
align-items: center;
flex: 1;
    margin-top: ${hp("1%")};
    margin-bottom: ${hp("3%")};
`


export const MainRectangle = styled.View`  
margin-top: ${hp("10%")};
align-items: center;
flex:2


    
`
