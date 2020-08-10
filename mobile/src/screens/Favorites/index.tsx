import React from "react";
import { View, ScrollView } from "react-native";

import ScreenHeader from "../../components/ScreenHeader";
import TeacherItem from "../../components/TeacherItem";
import styles from "./styles";

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={styles.teacherListContainer}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
};

export default Favorites;
