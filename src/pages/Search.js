import React from "react";
import { View, Text, Button } from "react-native";

export const Details = props => {
  return <View />;
};
Details.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("name")
  };
};

export default Details;
