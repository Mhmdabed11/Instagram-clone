import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FeIcon from "react-native-vector-icons/Feather";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";
import { ThemeContext } from "../../../App";
import palette from "../../palette";
export default function FeedItem({ username, likes, caption }) {
  const ThemeConsumer = React.useContext(ThemeContext);
  const { theme } = ThemeConsumer;

  const { lightTextColor, darkTextColor } = palette;
  const formattedLikes = likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const likesLabel = likes > 1 ? "likes" : "like";
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
      <View style={styles.feedItemBottom}>
        <View style={styles.actions}>
          <FeIcon
            name="heart"
            style={{ fontSize: 25 }}
            color={theme === "light" ? lightTextColor : darkTextColor}
          />
          <FaIcon
            name="comment"
            style={{ fontSize: 25, marginLeft: 15 }}
            color={theme === "light" ? lightTextColor : darkTextColor}
          />
          <SLIcon
            name="paper-plane"
            style={{ fontSize: 25, marginLeft: 15 }}
            color={theme === "light" ? lightTextColor : darkTextColor}
          />
        </View>
        <View>
          <FeIcon
            name="bookmark"
            style={{ fontSize: 25 }}
            color={theme === "light" ? lightTextColor : darkTextColor}
          />
        </View>
      </View>
      <View style={styles.likes}>
        <Text
          style={{
            color: theme === "light" ? lightTextColor : darkTextColor,
            fontWeight: "bold"
          }}
        >
          {`${formattedLikes} ${likesLabel}`}
        </Text>
      </View>
      <View style={styles.caption}>
        <Text
          style={{
            color: theme === "light" ? lightTextColor : darkTextColor,
            fontWeight: "bold"
          }}
        >
          {username} &nbsp;
          <Text
            style={{
              color: theme === "light" ? lightTextColor : darkTextColor,
              fontWeight: "normal"
            }}
          >
            {caption}
          </Text>
        </Text>
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
  },
  feedItemBottom: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between"
  },
  actions: {
    flexDirection: "row"
  },
  likes: {
    paddingLeft: 10,
    paddingRight: 10
  },
  caption: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5
  }
});
