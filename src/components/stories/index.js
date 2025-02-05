import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Story from "../story";

const Stories = ({ stories }) => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Story username={"Your Story"} />
        {stories.map((story, index) => (
          <Story key={index} username={story} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
