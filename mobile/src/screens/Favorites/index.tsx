import React, { useState } from "react";
import { View, ScrollView, AsyncStorage } from "react-native";

import { useFocusEffect } from "@react-navigation/native";

import ScreenHeader from "../../components/ScreenHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import styles from "./styles";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  async function loadFavorites() {
    const response = await AsyncStorage.getItem("@proffy/favorite");
    if (response) {
      const favoritedTeachers = JSON.parse(response);

      setFavorites(favoritedTeachers);
    }
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <ScreenHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={styles.teacherListContainer}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
