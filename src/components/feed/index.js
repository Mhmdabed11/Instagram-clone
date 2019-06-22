import React from "react";
import FeedItem from "../feed item";
import { ScrollView, StyleSheet, View } from "react-native";
export default function Feed(props) {
  return (
    <View>
      <FeedItem username="mhmd.abed" />
      <FeedItem username="mhmd.abed" />
      <FeedItem username="mhmd.abed" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  }
});
