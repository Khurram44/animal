import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC, useState } from "react";

import { NativeBaseProvider } from "native-base";
import Account from './Account';
import Live from './Live';
import Shop from './Shop';
import Wallet from './Wallet';
import { COLORS } from '../constants';
import { Image, View, Text } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Labeltext, Selectedlabeltext } from '../Styles/Bottomtab';
const Tab = createBottomTabNavigator();
const Bottomtab: FC = () => {

    return (
        <NativeBaseProvider>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                   
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: "absolute",
                        padding: 5,
                        paddingBottom: 10,
                        height: heightPercentageToDP("8%"),
                        backgroundColor:"#212E3E"
                    },
                    tabBarHideOnKeyboard:true
                    
                }}
            >
                <Tab.Screen
                    name="Wallet"
                    component={Wallet}
                    options={{
                        tabBarHideOnKeyboard: true,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        top: 1,
                                    }}
                                >
                                    <Image
                                        source={require("../assets/images/wallet.png")}
                                        style={{
                                            tintColor: focused ? "#532DF5" : "#556B86",
                                        }}
                                    />
                                      {
                                        focused ? <Selectedlabeltext>Wallet</Selectedlabeltext> :  <Labeltext>
                                        Wallet
                                    </Labeltext>
                                    }
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="Live"
                    component={Live}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        top: 1,
                                    }}
                                >
                                    <Image
                                        source={require("../assets/images/Livebottom.png")}
                                        style={{
                                            tintColor: focused ? "#532DF5" : "#556B86",
                                        }}
                                    />
                                      {
                                        focused ? <Selectedlabeltext>Live</Selectedlabeltext> :  <Labeltext>
                                        Live
                                    </Labeltext>
                                    }
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="Shop"
                    component={Shop}
                    options={{
                        tabBarHideOnKeyboard: true,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        top: 1,
                                    }}
                                >
                                    <Image
                                        source={require("../assets/images/Shopbottom.png")}
                                        style={{

                                            tintColor: focused ? "#532DF5" : "#556B86",
                                        }}
                                    />
                                      {
                                        focused ? <Selectedlabeltext>Shop</Selectedlabeltext> :  <Labeltext>
                                        Shop
                                    </Labeltext>
                                    }
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={Account}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View
                                    style={{
                                        padding: 10,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        top: 1,
                                    }}
                                >
                                    <Image
                                        source={require("../assets/images/Profile.png")}
                                        style={{
                                            tintColor: focused ? "#532DF5" : "#556B86",
                                        }}
                                    />

                                    {
                                        focused ? <Selectedlabeltext>Account</Selectedlabeltext> :  <Labeltext>
                                        Account
                                    </Labeltext>
                                    }
                                   
                                </View>
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        </NativeBaseProvider>
    );
};

export default Bottomtab;

