import React, { FC, useState ,useEffect} from "react";

import { View, TouchableOpacity, ScrollView, Image, Dimensions, Text, StyleSheet, ImageBackground } from "react-native";
import { NativeBaseProvider, Input } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Button from "../components/Button";
import { Mainholder } from "../Styles/TokenScreen";
import { Toptext } from "../Styles/TokenScreen";
import AntDesign from '@expo/vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Carousel, { Pagination ,ParallaxImage} from 'react-native-snap-carousel';



const { width: screenWidth } = Dimensions.get('window')

const DataCard = [
    {
        id: 1,
        cardnumber: '6736 8787 6787 6787',
        name: 'Leo Septimus',
        valid: '02/24'

    },
    {
        id: 2,
        cardnumber: '6736 8787 6787 6787',
        name: 'Leo Septimus',
        valid: '02/24'

    },
    {
        id: 3,
        cardnumber: '6736 8787 6787 6787',
        name: 'Leo Septimus',
        valid: '02/24'

    }
]

const securePasswordEntry = (value) =>{ 
    return value && value.replace(/./g, ' *')
  }
  
const CardCarasol = ({item, index}) => {
    return (
        
        <View>
            
                <View>
                <View style={styles.top}>
                    <Image source={require('../assets/images/Visa.png')} style={styles.visa}/>
                </View>
                <ImageBackground resizeMode="cover" style={{ width: wp("85"), height: hp("20"), alignSelf: 'center' ,marginTop:hp('-1%')}} imageStyle={{borderBottomLeftRadius:15,borderBottomRightRadius:15}}
                    source={require("../assets/images/Pattern.png")}>
                        <View style={{marginTop:hp('3%'),marginLeft:wp('5%')}}>
                        <Text style={styles.texta}>Card Number</Text>
                    <Text style={{}}>{securePasswordEntry(item.cardnumber)}</Text>
                    <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column',}}>

                    <Text style={styles.texta}>CARD HOLDER NAME</Text>
                    <Text style={styles.textb}>{item.name}</Text>
                    </View>
                    <View style={{flexDirection:'column',marginLeft:wp('10%')}}>

                    <Text style={styles.texta}>VAILD</Text>
                    <Text style={styles.textb}>{item.valid}</Text>
                    </View>
                    </View>
                    </View>
                </ImageBackground>
            </View>
            
            

        </View>
    )
}
const CardSwiper: FC = () => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        setEntries(DataCard);
      }, []);
    return (
        <NativeBaseProvider>
            <View>
                <Carousel
                    ref={isCarousel}    
                    data={DataCard}
                    renderItem={CardCarasol}                
                    sliderWidth={screenWidth}     
                    itemWidth={screenWidth - 60}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                    hasParallaxImages={true}

                />
                <Pagination
                              dotsLength={entries.length}

                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        backgroundColor: '#532DF5'
                    }}
                    inactiveDotColor={'#B0B0B0'}
                    
                    tappableDots={true}
                />



            </View>


        </NativeBaseProvider>
    )
}
export default CardSwiper;
const styles = StyleSheet.create({
    top: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#004751',
        width: wp('85%'),
        padding: wp('2%'),
        alignSelf: 'center',


    },
    visa:{
        width:wp('16%'),
        height:hp('8%'),
        marginLeft:wp('5%')
    },
    texta:{
        fontSize:12,
        textTransform:'uppercase',
        color:"#171E29",
        opacity:0.7
    },
    textb:{
       fontSize:13,
       letterSpacing:0.2,
       color:'#202046'


    }

})