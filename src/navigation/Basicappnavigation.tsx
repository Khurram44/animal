import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Mainscreen from "../screens/Mainscreen";
import Signinscreen from "../screens/Signinscreen";
import Signupscreen from "../screens/Signupscreen";
import Congratsscreen from "../screens/Congratsscreen";
// import Personalinformation from "../screens/Personalinformation";
import Onboardingscreen from "../screens/onBoarding";
import Rectangle from "../components/Rectangle";
import OtpScreen from "../screens/OtpScreen";
import PersonalScreen from "../screens/PersonalScreen";
import Bottomtab from "../screens/Bottomtabstack";
import TokenScreen from "../screens/TokenScreen";
import Successful1 from "../components/Successful1";
import SendToken from "../screens/SendToken";
import AddRecepient from "../components/AddReceipent";
import QrcodeScreen from "../components/QrcodeScreen";
import ConfirmPayment from './../screens/ConfirmPayment';
import PaymentVerify from "../screens/PaymentVerify";
import RecepientAddedscreen from "../screens/RecepientAddedScreen";
import BuyCrypto from "../screens/BuyCrypto";
import AddCard from "../screens/AddCard";
import Summary from "../screens/Summary";
import BuyVerify from "../screens/BuyVerify";
import ScanCard from "../components/ScanCard";

export type AuthStackParamList = {


  Onboarding: undefined
  Signin: undefined
  Signup: undefined
  onboarding: undefined
  OtpScreen: undefined
  Bottomtab: undefined
  PersonalScreen: undefined
  Congrats: undefined
  Tokenscreen: undefined
  Success1: undefined
  Sendtoken: undefined
  Addrecipient: undefined
  QrcodeScreen: undefined
  ConfirmPayment: undefined
  PaymentVerify: undefined
  RecepientAddedscreen: undefined
  BuyCrypto: undefined
  AddCard: undefined
  Summary: undefined
  BuyVerify: undefined
  ScanCard: undefined









}
const { Navigator, Screen } = createStackNavigator<AuthStackParamList>();


const AppNavigation: FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Screen name="Onboardingscreen" component={Onboardingscreen} />

      <Screen name="Signin" component={Signinscreen} />
      <Screen name="Signup" component={Signupscreen} />
      <Screen name="Congrats" component={Congratsscreen} />

      {/* <Screen name="Personalinformation" component={Personalinformation} /> */}
      <Screen name="OtpScreen" component={OtpScreen} />
      <Screen name="PersonalScreen" component={PersonalScreen} />
      <Screen name="Bottomtab" component={Bottomtab} />
      <Screen name="Tokenscreen" component={TokenScreen} />
      <Screen name="Success1" component={Successful1} />
      <Screen name="Sendtoken" component={SendToken} />
      <Screen name="Addrecipient" component={AddRecepient} />
      <Screen name="QrcodeScreen" component={QrcodeScreen} />
      <Screen name="ConfirmPayment" component={ConfirmPayment} />
      <Screen name="PaymentVerify" component={PaymentVerify} />
      <Screen name="RecepientAddedscreen" component={RecepientAddedscreen} />
      <Screen name="BuyCrypto" component={BuyCrypto} />
      <Screen name="AddCard" component={AddCard} />
      <Screen name="Summary" component={Summary} />
      <Screen name="BuyVerify" component={BuyVerify} />
      <Screen name="ScanCard" component={ScanCard} />
</Navigator>
  );
};

export default AppNavigation;
