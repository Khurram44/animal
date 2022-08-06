import React, { FC, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";



import { Box, Center, Hidden, NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants";
import { Buttonholder, Eachfield, Formholder, Headingtext, Inputbox, Labels, Lowertext, Maincontainer, Passwordtext, Text1, Text2, Textinputholder } from "../Styles/Signin";
import { type } from './../navigation/Basicappnavigation';
import Button from "../components/Button";
import { Footer, Header, Profilename } from "../Styles/Profile";
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Profiledata = [
    {
        id: 1,
        username: "Jocelyn Franci",
        email: "Jocelyn@gmail.com",
        phone: "+119687865",
        password: "Iamsidni12n",
        image: require("../assets/images/Accountimg.png")
    }
]
const Account: FC = () => {


    return (  
        <NativeBaseProvider>
            <Header>
                <Image source={require("../assets/images/Crowd.png")} style={styles.imagestyle} />
            </Header>


            <Footer> 
                {
                    Profiledata.map((data) => {
                        return (

                            <View>
                                <Image source={data.image} style={styles.accimg} />
                                <Profilename>{data.username}</Profilename>
<ScrollView style = {{height:heightPercentageToDP("55%")}}>
                                <Formholder> 

                                    <Labels>Name</Labels>
                                    <Eachfield>
                                        <Textinputholder>
                                            <Inputbox placeholder="User Name" placeholderTextColor="#fff" />
                                            <Image source={require("../assets/images/Pencil.png")} style={{ position: 'absolute', right: 10, top: 12 }} />
                                        </Textinputholder>
                                    </Eachfield>

                                    <Labels>Email</Labels>
                                    <Eachfield>
                                        <Textinputholder>
                                            <Inputbox placeholder="email@gmail.com" placeholderTextColor="#fff" />
                                            <Image source={require("../assets/images/Pencil.png")} style={{ position: 'absolute', right: 10, top: 12 }} />
                                        </Textinputholder></Eachfield>


                                    <Labels>Phone Number</Labels>
                                    <Eachfield>
                                        <Textinputholder>
                                            <Inputbox placeholder="Phone Number" placeholderTextColor="#fff" />
                                            <Image source={require("../assets/images/Pencil.png")} style={{ position: 'absolute', right: 10, top: 12 }} />
                                        </Textinputholder></Eachfield>


                                    <Labels>Password</Labels>
                                    <Eachfield>
                                        <Textinputholder>
                                            <Inputbox placeholder="Password" placeholderTextColor="#fff" secureTextEntry={true} />
                                            <Image source={require("../assets/images/Pencil.png")} style={{ position: 'absolute', right: 10, top: 12 }} />
                                        </Textinputholder></Eachfield>


                                        <View style={{ alignSelf: "center", marginTop: heightPercentageToDP("2%"),marginBottom:heightPercentageToDP("2.5%") }}>
                                    <Button title="Logout" /></View>

                                </Formholder>
                                </ScrollView>
                            </View>


                        )
                    })
                } 
            </Footer></NativeBaseProvider>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    imagestyle: {
        width: widthPercentageToDP("100%")
    },
    accimg: {
        borderRadius: 50,
        alignSelf: "center",
        marginTop: heightPercentageToDP("-6%")
    },
    inputholder: {
        alignSelf: "center"
    }
});
