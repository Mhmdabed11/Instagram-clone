/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Home from "./src/pages/Home";
import Search from "./src/pages/Search";
import Camera from "./src/pages/Camera";
import PeopleFeed from "./src/pages/PeopleFeed";
import Profile from "./src/pages/Profile";
import FeIcon from "react-native-vector-icons/Feather";
import SLIcon from "react-native-vector-icons/SimpleLineIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import palette from "./src/palette";
import TabBarComponent from "./src/components/tab-bar";

const {
  darkHeader,
  darkBody,
  darkHeaderIcon,
  lightHeader,
  lightBody,
  lightHeaderIcon
} = palette;

//stack navigator for home
const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ screenProps }) => {
      const color =
        screenProps.theme === "light" ? lightHeaderIcon : darkHeaderIcon;
      return {
        headerTitle: (
          <Image
            style={{ height: 40, width: 120 }}
            resizeMode="contain"
            source={
              screenProps.theme === "light"
                ? require("./src/img/instagram.png")
                : require("./src/img/instagram+white.png")
            }
          />
        ),
        headerRight: (
          <View
            style={{
              padding: 10,
              flexDirection: "row"
            }}
          >
            <FeIcon
              name="tv"
              color={color}
              style={{ fontSize: 25, marginRight: 20 }}
              solid
            />
            <SLIcon
              name="paper-plane"
              color={color}
              style={{ fontSize: 25 }}
              solid
            />
          </View>
        ),
        headerLeft: (
          <View
            style={{
              padding: 10
            }}
          >
            <FeIcon
              name="camera"
              color={color}
              style={{ fontSize: 25 }}
              solid
            />
          </View>
        ),
        headerStyle: {
          backgroundColor:
            screenProps.theme === "dark" ? darkHeader : lightHeader
        }
      };
    }
  }
});

//create a tab navigator
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Search,
    Camera,
    PeopleFeed,
    Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Home") {
            return <EntypoIcon name={"home"} size={25} color={tintColor} />;
          } else if (routeName === "Search") {
            return <FeIcon name={"search"} size={25} color={tintColor} />;
          } else if (routeName === "Camera") {
            return <FeIcon name={"plus-square"} size={25} color={tintColor} />;
          } else if (routeName === "PeopleFeed") {
            return <EntypoIcon name={"heart"} size={25} color={tintColor} />;
          } else if (routeName === "Profile") {
            return <EntypoIcon name={"user"} size={25} color={tintColor} />;
          }
        }
      };
    },
    tabBarOptions: {
      showLabel: false
    },
    tabBarComponent: props => {
      return <TabBarComponent {...props} />;
    }
  }
);

// create theme Context
export const ThemeContext = React.createContext(null);
//Create Theme Provider
const ThemeProvider = ThemeContext.Provider;
//create AppContainer
const AppContainer = createAppContainer(TabNavigator);

class App extends React.Component {
  state = {
    theme: "light"
  };

  toggleTheme = () => {
    if (this.state.theme === "light") this.setState({ theme: "dark" });
    else this.setState({ theme: "light" });
  };

  render() {
    return (
      <ThemeProvider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme
        }}
      >
        <AppContainer screenProps={{ theme: this.state.theme }} />
      </ThemeProvider>
    );
  }
}

export default App;
