import React, { FC, useRef } from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
} from "react-native-responsive-screen";
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from '@expo/vector-icons/Entypo';
import AppLoading from 'expo-app-loading';
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "loginscreen">
import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,

} from '@expo-google-fonts/poppins';
import { StackNavigationProp } from '@react-navigation/stack';



const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#171E29', white: '#fff' };


const slides = [
    {
        id: 1,
        image: require("../assets/images/social.png"),

        title: 'Send and Receive Crypto!',
        desc: 'Send crypto to your friends with a personal message attached. '

    },
    {
        id: 2,
        image: require("../assets/images/streaming.png"),

        title: 'Enjoy Livestream',
        desc: 'Create Livestream and enjoy  with friends!'

    },
    {
        id: 3,
        image: require("../assets/images/bitcoin.png"),

        title: 'Digital Commerce & Collectibles',
        desc: 'Purchase and collect NFT!'

    },
]


const Onboardingscreen: FC = () => {
     const navigation = useNavigation<Authtype>();

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };
    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };





    const Footer = () => {
        return (
            <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                {/* Indicator container */}
                <View >
                    <TouchableOpacity onPress={skip}>


                        <Text style={styles.textbtn1}>Skip</Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 6
                    }}>
                    {/* Render indicator */}
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: "#532DF5",
                                },
                            ]}
                        />
                    ))}
                </View>

                {/* Render buttons */}
                <View style={{ marginBottom: 20 }}>
                    {currentSlideIndex == slides.length - 1 ? (
                        <View>
                            <TouchableOpacity onPress={()=>{navigation.navigate("Signin")}}>


                                <Text style={styles.textbtn}>Next</Text>

                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View >
                            <TouchableOpacity onPress={goToNextSlide}>


                                <Text style={styles.textbtn}>Next</Text>

                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>);
    };
    let [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,

    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
                <StatusBar backgroundColor={COLORS.primary} />
                <FlatList
                    ref={ref}
                    onMomentumScrollEnd={updateCurrentSlideIndex}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={slides}
                    pagingEnabled
                    renderItem={({ item }) => {
                        return (
                            <View style={{ height: hp('45%'), marginTop: hp('0%') }}>

                                <View style={{ alignItems: 'center', marginTop: hp('20%') }}>
                                    <Image
                                        source={item?.image}
                                        style={{ height: '70%', width, resizeMode: 'contain' }}
                                    />
                                    <View >
                                        <View style={{
                                            width: wp('80%'),
                                            flexGrow: 1,
                                            flex: 1,
                                        }}>
                                            <Text style={styles.title}>{item?.title}</Text>
                                        </View>
                                        <View style={{
                                            width: wp('80%'),
                                            flexGrow: 1,

                                        }}>
                                            <Text style={styles.desc}>{item?.desc}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    }
                />
                <Footer />
            </SafeAreaView>
        );
    };
}

export default Onboardingscreen;
const styles = StyleSheet.create({

    title: {
        color: '#fff',
        fontSize: 24,
        marginTop: hp('4%'),
        textAlign: 'center',
        fontFamily: 'Poppins_700Bold',
    },
    desc: {
        color: '#B0B0B0',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: "Poppins_400Regular",
        marginTop: hp('3%'),


    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: 10,
        width: 10,
        backgroundColor: '#B0B0B0',
        marginHorizontal: 5,
        borderRadius: 50,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbtn: {
        color: "#532DF5", fontSize: 17, fontFamily: 'Poppins_600SemiBold'
    },
    textbtn1: {
        color: "#B0B0B0", fontSize: 17, fontFamily: 'Poppins_600SemiBold'
    },
    gradient: {
        width: wp('95%'),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: wp('3%')
    }
});