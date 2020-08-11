import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import {
  ScrollView,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";
import Select, { Item } from "react-native-picker-select";

import { Feather as Icon } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import TimePicker, { Event } from "@react-native-community/datetimepicker";

import ScreenHeader from "../../components/ScreenHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import api from "../../services/api";
import styles from "./styles";

const subjectItems = [
  { value: "Artes", label: "Artes" },
  { value: "Biologia", label: "Biologia" },
  { value: "Ciências", label: "Ciências" },
  { value: "Educação Física", label: "Educação Física" },
  { value: "Física", label: "Física" },
  { value: "Geografia", label: "Geografia" },
  { value: "História", label: "História" },
  { value: "Matemática", label: "Matemática" },
  { value: "Português", label: "Português" },
  { value: "Química", label: "Química" },
  { value: "Inglês", label: "Inglês" },
] as Item[];

const weekDayItems = [
  { value: "0", label: "Domingo" },
  { value: "1", label: "Segunda-feira" },
  { value: "2", label: "Terça-feira" },
  { value: "3", label: "Quarta-feira" },
  { value: "4", label: "Quinta-feira" },
  { value: "5", label: "Sexta-feira" },
  { value: "6", label: "Sábado" },
] as Item[];

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [filters, setFilters] = useState({
    week_day: "",
    subject: "",
    time: "",
  });
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  async function loadFavorites() {
    const response = await AsyncStorage.getItem("@proffy/favorite");
    if (response) {
      const favoritedTeachers = JSON.parse(response);
      const favoritedTeachersIds = favoritedTeachers.map(
        (teacher: Teacher) => teacher.id
      );

      setFavorites(favoritedTeachersIds);
    }
  }

  function hableToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  function handleFieldChange(field: string, text: string) {
    setFilters({ ...filters, [field]: text });
  }

  function handleTimeChange(event: Event, selectedDate?: Date) {
    let time = "";
    if (event.type === "set")
      time = `${selectedDate?.getHours()}:${selectedDate?.getMinutes()}`;

    setShowTimePicker(false);
    handleFieldChange("time", time);
  }

  async function handleSubmit() {
    try {
      loadFavorites();
      const { subject, week_day, time } = filters;

      if (!subject || !week_day || !time)
        Alert.alert(
          "Ooops!",
          "Preisamos que você selecione algo para todos os filtros!"
        );

      const response = await api.get("/classes", {
        params: { subject, week_day, time },
      });

      setTeachers(response.data);
      setIsFiltersVisible(!isFiltersVisible);
    } catch (err) {
      console.log(err);
      setTeachers([]);
    }
  }

  const HeaderRight: React.FC = () => (
    <BorderlessButton onPress={hableToggleFiltersVisible}>
      <Icon name="filter" size={20} color="#fff" />
    </BorderlessButton>
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Proffys disponíveis" headerRight={<HeaderRight />}>
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <Select
              placeholder={{
                label: "Qual a matéria?",
                value: "",
                color: "#c1bccc",
              }}
              style={{
                inputAndroid: {
                  ...styles.input,
                },
                iconContainer: {
                  ...styles.inputIcon,
                },
              }}
              Icon={() => (
                <Icon name="chevron-down" color="#c1bccc" size={20} />
              )}
              useNativeAndroidPickerStyle={false}
              value={filters.subject}
              onValueChange={(text) => handleFieldChange("subject", text)}
              items={subjectItems}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <Select
                  placeholder={{
                    label: "Qual o dia?",
                    value: "",
                    color: "#c1bccc",
                  }}
                  style={{
                    inputAndroid: {
                      ...styles.input,
                    },
                    iconContainer: {
                      ...styles.inputIcon,
                    },
                  }}
                  Icon={() => (
                    <Icon name="chevron-down" color="#c1bccc" size={20} />
                  )}
                  useNativeAndroidPickerStyle={false}
                  value={filters.week_day}
                  onValueChange={(text) => handleFieldChange("week_day", text)}
                  items={weekDayItems}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>

                <BorderlessButton
                  style={styles.input}
                  onPress={() => setShowTimePicker(true)}
                >
                  <Text style={!filters.time && styles.timeButtonPlaceholder}>
                    {filters.time ? filters.time : "Qual o horário?"}
                  </Text>
                </BorderlessButton>

                {showTimePicker && (
                  <TimePicker
                    mode="time"
                    is24Hour
                    value={new Date()}
                    onChange={handleTimeChange}
                  />
                )}
              </View>
            </View>

            <RectButton style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </ScreenHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={styles.teacherListContainer}
      >
        {teachers.map((teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
