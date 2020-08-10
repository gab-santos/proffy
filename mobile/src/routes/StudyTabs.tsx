import React from "react";
import { StyleSheet } from "react-native";

import { Ionicons as Icon } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Favorites from "../screens/Favorites";
import TeacherList from "../screens/TeacherList";

const styles = StyleSheet.create({
  container: {
    elevation: 0,
    shadowOpacity: 0,
    height: 54,
  },

  tab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    flex: 0,
    width: 20,
    height: 20,
  },

  label: {
    fontFamily: "Archivo_700Bold",
    fontSize: 13,
    marginLeft: 16,
  },
});

const { Navigator, Screen } = createBottomTabNavigator();

const StutyTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: styles.container,
        tabStyle: styles.tab,
        iconStyle: styles.icon,
        labelStyle: styles.label,
        activeBackgroundColor: "#ebebf5",
        inactiveBackgroundColor: "#fafafc",
        activeTintColor: "#32264d",
        inactiveTintColor: "#c1bccc",
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-easel" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-heart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default StutyTabs;
