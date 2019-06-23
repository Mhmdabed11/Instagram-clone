import React from "react";
import FeedItem from "../feed item";
import { ScrollView, StyleSheet, View } from "react-native";
export default function Feed(props) {
  return (
    <View>
      <FeedItem
        username="mhmd.abed"
        likes={2453}
        caption={
          "Sun in the valley with my dog in love and i went to hiking in aramoun"
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  }
});
