import React, { FC, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";



import { Box, Hidden, NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants";
import { Buttonholder, Formholder, Headingtext, Inputbox, Labels, Lowertext, Maincontainer, Passwordtext, Text1, Text2, Textinputholder } from "../Styles/Signin";
import { type } from './../navigation/Basicappnavigation';
import Button from "../components/Button";
const Live: FC = () => {


    return (
        <NativeBaseProvider>


        </NativeBaseProvider>
    );
};

export default Live;

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
    }
});
