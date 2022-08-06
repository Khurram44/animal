import React, { FC, useState } from "react";

import { AuthStackParamList } from "../navigation/Basicappnavigation";
type Authtype = StackNavigationProp<AuthStackParamList, "Congrats">
import { useNavigation } from "@react-navigation/native";

import { NativeBaseProvider } from "native-base";
import { Maincontainer } from "../Styles/Signin";
import Rectangle from "../components/Rectangle";
import { Mainholder, Buttonholder, Backtext } from "../Styles/Personal";
import Button from "../components/Button";
import { ScrollView, TouchableOpacity } from "react-native";
import { Formholder,Labels,Textinputholder,Inputbox} from "../Styles/Signin";
import AddImage from "../components/ImagePicker";
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from "formik";
import * as yup from "yup";
import { Text,View } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const PersonalScreen: FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('')

    const navigation = useNavigation<Authtype>();

    


    
const loginValidationSchema = yup.object().shape({

    name: yup.string().min(4).required("Name is required"),
        email: yup.string().email()
      .required("Email is required")
});
    return (
        <NativeBaseProvider>
            <Maincontainer>
                
            <Formik
            initialValues={{
             
              name: "",
              email: "",
            


            }}
            onSubmit ={(values) =>{
                setName(values.name)
                setEmail(values.email)


                navigation.navigate("Congrats")
            //   navigation.navigate("StripeGateway",{data:values})
              
              console.log(values);
            }}
          
            validationSchema={loginValidationSchema}
          >
            {({ handleSubmit, values, errors, touched, handleChange }) => (
              <>
              <ScrollView>
                <Mainholder>
                    
                    <Rectangle title="Personal Information" desc="Add your personal information" />
                </Mainholder>
                <AddImage/>
                <View style={{alignSelf:'center'}}>
                <Formholder>
                    <Labels>Name</Labels>
                    <Textinputholder>
                    
                        <Inputbox placeholder="User Name" placeholderTextColor={"white"}  onChangeText={handleChange("name")} value={values.name} /></Textinputholder>
                        {errors.name && (
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                color: "red",
                                                fontFamily: "monospace",
                                                marginTop: 10,
                                                marginLeft:widthPercentageToDP("2.5"),
                                            }}
                                        >
                                            {errors.name}
                                        </Text>
                                    )}
                    <Labels>Email</Labels>
                    <Textinputholder>

                    <Inputbox placeholder="abc@gmail.com" placeholderTextColor={"white"} onChangeText={handleChange("email")} value={values.email} /></Textinputholder>
                    {errors.email && (
                                        <Text
                                            style={{
                                                fontSize: 10,
                                                color: "red",
                                                fontFamily: "monospace",
                                                marginTop: 10,
                                                marginLeft: widthPercentageToDP("2.5"),
                                            }}
                                        >
                                            {errors.email}
                                        </Text>
                                    )}

                    </Formholder>
                    </View>
                 <View style={{marginBottom:heightPercentageToDP('2%')}}>
                <Buttonholder>

                    <Button title="Next" onPress={handleSubmit} />

                </Buttonholder>
                <TouchableOpacity style={{flex:1}} onPress = {()=>{navigation.goBack()}}>
                <Backtext>Back</Backtext>
                </TouchableOpacity>
                </View>
                </ScrollView>

              
</>
            )
}
            
</Formik>


            </Maincontainer>
        </NativeBaseProvider>
    )

};

export default PersonalScreen