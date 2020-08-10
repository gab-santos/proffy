import React from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton as Button } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

import backIcon from "../../assets/images/icons/back.png";
import logoImage from "../../assets/images/logo.png";
import styles from "./styles";

interface ScreenHeaderProps {
  title: string;
  headerRight?: React.ReactNode;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  children,
  headerRight,
}) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Button onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </Button>
        <Image source={logoImage} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        {headerRight}
      </View>

      {children}
    </View>
  );
};

export default ScreenHeader;
