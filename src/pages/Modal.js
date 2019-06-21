import React from "react";
import { View, Text, Button } from "react-native";
const Modal = props => {
  return (
    <View>
      <Text>Hello from Modal !</Text>
      <Button title="Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};
export default Modal;
