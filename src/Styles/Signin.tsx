import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Maincontainer = styled.KeyboardAvoidingView`
   
background-color:#171E29;
flex: 1; 

    
`

export const Headingtext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px; 

color: #FFFFFF;
font-size: 24px; 
margin-top:${hp("25")};
padding-left: ${wp("5%")};
`
export const Labels = styled.Text`
    
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 18px; 

letter-spacing: 0.2px; 

color: #B0B0B0;
margin-top: ${hp("3")};
margin-left: ${wp("7%")};
`
export const Formholder = styled.View`
    margin-top: ${hp("1%")}; 
    margin-bottom: ${hp("2.5%")};
`
export const Labelss = styled.Text`
    
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px;

letter-spacing: 0.2px; 

color: #B0B0B0;
`
export const Inputbox = styled.TextInput`
    
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
 
letter-spacing: 0.2px; 
padding-left:${wp("3%")};

color: '#fff';



`
export const Textinputholder = styled.View

    `
    /* flex-direction: row; */
    width: ${wp("90%")};
    margin-top: ${hp("1%")};
    background: #171E29;
border: 1px solid #4A4A4A;
border-radius: 10px;
padding: 5px;
justify-content: space-between;
padding-right: ${wp("5%")};
padding-top: ${hp("1")};
padding-bottom: ${hp("1%")};
`

export const Passwordtext = styled.Text`
    
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 20px; 


color: #FFFFFF;
`

export const Lowertext = styled.Text`
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 12px; 

text-align: right;
letter-spacing: 0.2px;
 

color: #B0B0B0;
margin-top: ${hp("2")};
 text-align: right;
 margin-right: ${wp("10.5")};

`


export const Buttonholder = styled.View`
    
    align-self: center;
    justify-content: center;
    align-items: center; 
    margin-top: ${hp("35%")};
`

export const Text1 = styled.Text`
    
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px; 
letter-spacing: 0.2px; 

color: #B0B0B0;
text-align: center;

`

export const Text2 = styled.Text`
    
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px; 

letter-spacing: 0.2px;
text-align: center;
color:#532DF5
`
export const Bottomtextholder = styled.TouchableOpacity`

align-self: center;
margin-top: ${hp("4%")};

`

export const Eachfield = styled.View`
align-self: center;
`