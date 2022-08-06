import { NativeBaseProvider, Text } from "native-base";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { LinearGradient } from "expo-linear-gradient";

interface Props {
    title: string;
    onPress: () => void;
    style?: any;
}

const Button: FC<Props> = (props) => {
    return (
        <NativeBaseProvider>
            <TouchableOpacity onPress={props.onPress}>
                <LinearGradient
                    colors={["#469FE5", "#532DF5"]}
                    style={styles.gradient}
                >

                    <Text style={styles.text}>{props.title}</Text>

                </LinearGradient>
            </TouchableOpacity>
        </NativeBaseProvider>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {},
    text: {
        fontWeight: "600",
        fontSize: 17,
        lineHeight: 20,
        textAlign: "center",
        letterSpacing: -0.25,
        color: "#FFFFFF",
    },
    gradient: {
        width: wp("85"),
        borderRadius: 15,
        padding: 13,
        marginTop: hp("1.5"),

    },
});
