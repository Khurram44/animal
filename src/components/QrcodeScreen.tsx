import React, { FC, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';


const QrcodeScreen: FC = () => {
    const[data,setdata] = useState()
    const [scanned, setScanned] = useState(false);
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setdata(data)
        
    };




  

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}

            > 
            <BarcodeMask edgeColor="#fff" showAnimatedLine />
            {scanned ? setScanned(false) :<View></View>}

            </BarCodeScanner>
        </View>
    );
}

export default QrcodeScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#171E29", 
        flex: 1,    
        justifyContent:'center',
        alignItems:'center'
    }
})