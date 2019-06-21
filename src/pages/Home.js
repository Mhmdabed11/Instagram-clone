import React from "react";
import { ThemeContext } from "../../App";
import { View, StyleSheet } from "react-native";

import Stories from "../components/stories";

const names = [
  "Mohammad",
  "Ahmad",
  "Yara",
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
  return (
    <View>
      <Stories stories={names} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default Home;
