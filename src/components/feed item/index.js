import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FeIcon from "react-native-vector-icons/Feather";
import { ThemeContext } from "../../../App";
import palette from "../../palette";
export default function FeedItem({ username }) {
  const ThemeConsumer = React.useContext(ThemeContext);
  const { theme } = ThemeConsumer;

  const { lightTextColor, darkTextColor } = palette;
  return (
    <View>
      <View style={styles.feedItemHeader}>
        <View style={styles.leftSection}>
          <View style={styles.displayPicture} />
          <Text
            style={{
              marginLeft: 9,
              color: theme === "light" ? lightTextColor : darkTextColor
            }}
          >
            {username}
          </Text>
        </View>
        <View style={styles.rightSection}>
          <FeIcon
            name="more-horizontal"
            style={{ fontSize: 25 }}
            color={theme === "light" ? lightTextColor : darkTextColor}
          />
        </View>
      </View>
      <View>
        <Image
          style={{
            alignSelf: "stretch",
            height: 300
          }}
          resizeMode="cover"
          progressiveRenderingEnabled={true}
          source={{
            uri:
              "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?cs=srgb&dl=camp-camping-evening-2422265.jpg&fm=jpg"
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  feedItemHeader: {
    padding: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center"
  },

  displayPicture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: "#efefef"
  }
});
