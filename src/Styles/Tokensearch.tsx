import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from '@expo/vector-icons/AntDesign';



export const Maincontentholder = styled.View`
     align-self: center;
     margin-top: ${hp("2.5%")};
`


export const Searchfield = styled.TextInput`
    width: ${wp("88%")};
    border-radius: 10px;
    padding: 10px;
    background-color: #212E3E;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px; 
letter-spacing: 0.2px; 

color: #B0B0B0;

    


`

export const Listholder = styled.View`
    
    margin-top: ${wp("7.5%")};
    align-self: center;
`

export const Itemholder = styled.View`
background-color: #212E3E;
width: ${wp("88%")};
padding: 10px;
border-radius: 15px;
margin-top: ${hp("1.5%")};
    
`
export const Rowholder = styled.View`
flex-direction: row;
justify-content: space-between;
`

export const Nameholder = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px; 
 
letter-spacing: 0.2px;

color: #FFFFFF; 
text-align: left;


`

export const Namemain = styled.View` 
justify-content: center;
align-items: center;
`

export const Buttonholder = styled.View`
    
    margin-top: ${hp("5%")};
    align-self: center;
    margin-bottom: ${hp("2.5%")};
`

export const Checkbox = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    border-radius: 80px;
    border-width: 2px;
    border-color: white;
    align-self: center;
    margin-left: ${wp("20%")};
`