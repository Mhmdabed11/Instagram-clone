import React from "react";
import { View, Text, Button } from "react-native";

export const Details = props => {
  return (
    <View>
      <Text>Details screen</Text>
      <Text>{JSON.stringify(props.navigation.getParam("name"))}</Text>
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
      <Button
        title="Update header"
        onPress={() => props.navigation.setParams({ name: "Khattab" })}
      >
        Update Me
      </Button>
    </View>
  );
};
Details.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("name")
  };
};

export default Details;
