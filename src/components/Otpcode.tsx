import React, {FC, useState} from 'react';
import {SafeAreaView, Text, View,StyleSheet,Button, TouchableOpacity} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import AppLoading from 'expo-app-loading';

import {
    useFonts,
    
    Poppins_500Medium,
   
    

} from '@expo-google-fonts/poppins';
const CELL_COUNT = 4;
     
const OtpCode: FC = () => {
   
         
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,    
  });
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,


});
if (!fontsLoaded) {
    return <AppLoading />;
} else {

  return (
    <View style={{flex:2}}>

    <SafeAreaView style={styles.root}>
    <Text style={{marginTop:20,marginLeft:widthPercentageToDP('3%'),color:"#B0B0B0",fontSize:16,fontFamily:'Poppins_500Medium'}}>Verify code</Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity>
                      <Text style={{marginTop:20,alignSelf:'center',color:"#B0B0B0",fontFamily:'Poppins_500Medium'}}>Resend code?</Text>
                      </TouchableOpacity>


    </SafeAreaView>
    </View>
  );
};
}

export default OtpCode;
const styles=StyleSheet.create({
    root: {alignSelf:'center',marginTop:heightPercentageToDP('3%')},
  codeFieldRoot: {
    marginTop:heightPercentageToDP('2%'),
    width:widthPercentageToDP('90%'),
  
  },
  cellRoot: {
    width: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    elevation:2,
    borderWidth:1,
    borderColor:'#4A4A4A'
  },
  cellText: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#007AFF',
    borderBottomWidth: 2,
  },
  texta:{
    textAlign:"center",
    marginTop:heightPercentageToDP('3%'),
    color:'#B0B0B0',
    flex:1

  }

})