import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import studyIcon from "../../assets/images/icons/study.png";
import landingImage from "../../assets/images/landing.png";
import api from "../../services/api";
import styles from "./styles";

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await api.get("/connections");
      setTotalConnections(response.data.total);
    })();
  }, []);

  function handleNavigateToGiveClassesScreen() {
    navigate("GiveClasses");
  }

  function handleNavigateToStudyScreen() {
    navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImage} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudyScreen}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesScreen}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conex{totalConnections !== 1 ? "ões" : "ão"}{" "}
        já realizada{totalConnections !== 1 && "s"} <Image source={heartIcon} />
      </Text>
    </View>
  );
};

export default Landing;
