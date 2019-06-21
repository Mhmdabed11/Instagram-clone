import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import palette from "../../palette";
import { ThemeContext } from "../../../App";
const { lightTextColor, darkTextColor } = palette;
const Story = ({ username }) => {
  const ThemeConsumer = React.useContext(ThemeContext);
  const { theme } = ThemeConsumer;
  return (
    <View style={styles.container}>
      <View style={styles.storyPic} />
      <View>
        <Text
          style={{
            fontSize: 13,
            color: theme === "light" ? lightTextColor : darkTextColor
          }}
        >
          {username}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#efefef"
  },
  storyPic: {
    width: 60,
    height: 60,
    backgroundColor: "#efefef",
    borderRadius: 50
  },
  username: {
    fontSize: 13
  }
});

export default Story;
