import React, { FC, useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, ImageBackground, Pressable } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, NativeBaseProvider } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import Entypo from '@expo/vector-icons/Entypo';




const AddImage :FC = () => {
    const [pickedImagePath, setPickedImagePath] = useState('https://github.com/ali909-oss/images/blob/master/Ellipse_377-removebg-preview.png');

    // This function is triggered when the "Select an image" button pressed
    const showImagePicker = async () => {
      // Ask the user for the permission to access the media library 
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your photos!");
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync();
  
      // Explore the result
      console.log(result);
  
      if (!result.cancelled) {
        setPickedImagePath(result.uri);
        console.log(result.uri);
      }
    }
    return (
        <Box style={styles.container}>
            <TouchableOpacity onPress={showImagePicker}>
            <Box  style={styles.back}>
            <Box
          style={{
          height: 25,   
          width: 25,
          borderRadius: 25,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute", //Here is the trick
          bottom: 0,
          alignSelf: "flex-end",
          zIndex:2
          }}
         >
          <Entypo name="camera" size={15} color="black" />
        </Box>
            {
          pickedImagePath !== '' &&
          <Box style={{justifyContent:'center',alignItems:'center'}}>
          <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
          </Box>
        }

            </Box>
            </TouchableOpacity>

        </Box>
    )
}
export default AddImage;
const styles = StyleSheet.create({
    container:{
       
      alignItems:"center",
      justifyContent:'center',
      marginTop:hp('5%')
      

    },
    image:{
        width: wp('25%'),
        height:hp('12%'),
        borderRadius: 50,
        resizeMode:'contain',
        alignItems: 'center',
        justifyContent: 'center',
        

        


    },
    back: {
        width: wp('25%'),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:hp('2%'),
        backgroundColor:'#212E3E'
    },
    

})