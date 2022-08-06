import { StyleSheet, Platform, KeyboardAvoidingView, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/navigation/Basicappnavigation";
import { rootstore, StoreProvider } from "./src/Store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from "@react-navigation/stack";

import { widthPercentageToDP, } from 'react-native-responsive-screen';
import { heightPercentageToDP } from 'react-native-responsive-screen';
export default function App() {
  return (


    <NavigationContainer>
      <SafeAreaProvider>

        <AppNavigation />

      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
