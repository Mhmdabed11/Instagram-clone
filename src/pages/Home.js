import React from "react";
import { ThemeContext } from "../../App";
import { View, StyleSheet, ScrollView } from "react-native";

import Stories from "../components/stories";
import Feed from "../components/feed";
import palette from "../palette";
const names = [
  "Mohammad",
  "Ahmad",
  "Rahaf",
  "Hasan",
  "Zeinab",
  "Oussama",
  "Hasan",
  "Said",
  "Belal",
  "Khalil",
  "Mohammad",
  "Ahmad",
  "Yara",
  "Hasan",
  "Zeinab",
  "Oussama",
  "Hasan",
  "Said",
  "Belal",
  "Khalil"
];
const Home = props => {
  const ThemeConsumer = React.useContext(ThemeContext);
  const { theme } = ThemeConsumer;
  const { darkBody, lightBody } = palette;
  return (
    <View
      style={{
        backgroundColor: theme === "light" ? lightBody : darkBody,
        flex: 1
      }}
    >
      <ScrollView>
        <Stories stories={names} />
        <Feed />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
