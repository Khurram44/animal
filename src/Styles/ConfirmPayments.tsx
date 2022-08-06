import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Maincontainer = styled.View`
   
background-color:#171E29; 
flex: 1;
justify-content: center;
align-items: center;

    
`





export const Buttonholder = styled.View`
    
    align-self: center;
    justify-content: center;
    align-items: center; 
    margin-top: ${hp("30%")};
`
export const MainView = styled.View`
    
    align-self: center;
    background: #212E3E;
    border-radius:15;
    width: ${wp("90%")};
    padding:5px;


    
    margin-top: ${hp("8%")};
`
export const MainViewTwo = styled.View`
    
    align-self: center;
    background: #212E3E;
    border-radius:15;
    width: ${wp("90%")};
    padding:5px;


    
    margin-top: ${hp("4%")};
`


