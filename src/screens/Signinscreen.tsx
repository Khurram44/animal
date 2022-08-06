import React, { FC, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, Platform } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Signup">
import { useNavigation } from "@react-navigation/native";

import { Formik } from "formik";
import * as yup from "yup";
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const loginValidationSchema = yup.object().shape({

    phone: yup
        .string()
        .required()
        .matches(phoneRegExp, "Phone number is not valid"),
});



import { Box, Center, Hidden, NativeBaseProvider, KeyboardAvoidingView } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../constants";
import { Bottomtextholder, Buttonholder, Eachfield, Formholder, Headingtext, Inputbox, Labels, Lowertext, Maincontainer, Passwordtext, Text1, Text2, Textinputholder } from "../Styles/Signin";
import { type } from './../navigation/Basicappnavigation';
import Button from "../components/Button";
import { Header } from "@react-navigation/stack";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { StackNavigationProp } from '@react-navigation/stack';
const Signinscreen: FC = () => {
    const [password, setPassword] = useState<string>('');
    const [Phone, setphone] = useState<string>('')
    const [passwordtextstate, setpasswordtextstate] = useState<string>("Show")

    const navigation = useNavigation<Authtype>();

    return (
        <NativeBaseProvider>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, backgroundColor: "#171E29" }}>
                <Headingtext>
                    Sign In
                </Headingtext>
                <Formholder
                >
                    <Formik
                        initialValues={{ phone: "" }}
                        onSubmit={(values) => {
                            setphone(values.phone)
                            navigation.navigate("Bottomtab")

                        }}
                        validationSchema={loginValidationSchema}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            isValid,
                        }) => (
                            <View>
                                <Labels>Phone Number</Labels>
                                <Eachfield>
                                    <Textinputholder>
                                        <Inputbox placeholder="+192929292339" placeholderTextColor={"white"} keyboardType={"numeric"} onChangeText={handleChange("phone")}
                                            onBlur={handleBlur("phone")}
                                            value={values.phone} />

                                    </Textinputholder>
                                    {errors.phone && (
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                color: "red",
                                                fontFamily: "monospace",
                                                marginTop: 10,
                                                marginLeft: widthPercentageToDP("2.5"),
                                            }}
                                        >
                                            {errors.phone}
                                        </Text>
                                    )}
                                </Eachfield>

                                <Buttonholder>
                                    <TouchableOpacity onPress={() => {
                                        handleSubmit()
                                    }}    >
                                        <LinearGradient
                                            colors={["#469FE5", "#532DF5"]}
                                            style={styles.gradient}
                                        >

                                            <Text style={styles.text}>Sign In</Text>

                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <Bottomtextholder onPress={() => navigation.navigate("Signup")}>
                                        <Text1>
                                            No Account ?{""}
                                            <Text2>
                                                {""}  Create an Account
                                            </Text2>
                                        </Text1></Bottomtextholder>
                                </Buttonholder>
                            </View>

                        )}



                    </Formik>


                </Formholder>

            </KeyboardAvoidingView>


        </NativeBaseProvider >
    );
};

export default Signinscreen;

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
    text: {
        fontWeight: "600",
        fontSize: 17,
        lineHeight: 20,
        textAlign: "center",
        letterSpacing: -0.25,
        color: "#FFFFFF",
    },
    gradient: {
        width: widthPercentageToDP("85%"),
        borderRadius: 15,
        padding: 13,
        marginTop: heightPercentageToDP("1.5%"),

    },
});
