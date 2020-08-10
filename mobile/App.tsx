import React from "react";

import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

import Landing from "./src/pages/Landing";

const App: React.FC = () => {
  const [fontLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontLoaded) return <AppLoading />;

  return (
    <>
      <Landing />
      <StatusBar style="light" />
    </>
  );
};

export default App;
