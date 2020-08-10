import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import ScreenHeader from "../../components/ScreenHeader";
import TeacherItem from "../../components/TeacherItem";
import styles from "./styles";

const TeacherList: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Proffs disponíveis" />

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

export default TeacherList;
