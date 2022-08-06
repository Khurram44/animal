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


    
    margin-top: ${hp("15%")};
`
export const Amounttext = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: bold;
font-size: 18px;
align-self: center;


display: flex;
align-items: center;
letter-spacing: 0.2px;


color: #FFFFFF;
    
   
`
export const Addresstext = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;


letter-spacing: 0.2px;
text-align: right;
margin:2px;


color: #B0B0B0;

    
   
`
export const Lefttext = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;

letter-spacing: 0.2px;

color: #B0B0B0;
    
   
`
export const RighttextAmount = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 15px;

letter-spacing: 0.2px;     

color: #0DC240;
    
   
`
export const Righhttext = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 15px;

letter-spacing: 0.2px;


color: #FFFFFF;
    
   
`
export const Imagebck = styled.View`
border-radius:50px;
background: #171E29;
justify-content: center;
    align-items: center; 
    width: 102px;
height: 102px;
align-self: center;
margin-top: ${hp("-10%")};



    
   
`
export const UserImgae = styled.Image`
width: 88px;
height: 88px;
border-radius:50px;

    
   
`
export const Content = styled.View`
   

justify-content: space-between;
flex-direction:row;
margin-top: ${hp("3%")};


    
`

export const SubContent = styled.View`
   

flex-direction:column
    
`
export const Amounttexta = styled.Text`

font-family: 'Poppins';
font-style: normal;
font-weight: bold;
font-size: 18px;

letter-spacing: 0.2px;
margin:2px;

color: #0DC240;
`
export const AmountTextfooter = styled.Text`

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 17px;

letter-spacing: 0.2px;

color: #B0B0B0;

`


