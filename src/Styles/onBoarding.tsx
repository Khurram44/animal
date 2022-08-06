import styled from "styled-components/native";
import { ImageBackground, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export const FooterMain = styled.View`
   
justifyContent: 'space-around',
flexDirection: 'row',

    
`

export const Title = styled.Text`
color: '#fff',
        fontSize: 24,
        marginTop: hp('4%'),
        textAlign: 'center',



`