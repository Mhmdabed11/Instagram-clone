import React from "react";
import { BottomTabBar } from "react-navigation";
import { ThemeContext } from "../../../App";
import palette from "../../palette";

const {
  darkActiveTabIcon,
  darkInactiveTabIcon,
  lightActiveTabIcon,
  LightInactiveTabIcon,
  darkTab,
  lightTab
} = palette;
// Customize Bottom Tab Bar
const TabBarComponent = props => {
  const ThemeConsumer = React.useContext(ThemeContext);
  const { theme } = ThemeConsumer;
  const activeTintColor =
    theme === "light" ? lightActiveTabIcon : darkActiveTabIcon;
  const inActiveTintColor =
    theme === "light" ? LightInactiveTabIcon : darkInactiveTabIcon;
  const tabColor = theme === "light" ? lightTab : darkTab;
  return (
    <BottomTabBar
      {...props}
      activeTintColor={activeTintColor}
      inactiveTintColor={inActiveTintColor}
      style={{ backgroundColor: tabColor }}
    />
  );
};
export default TabBarComponent;
