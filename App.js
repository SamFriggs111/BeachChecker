import * as React from "react";
import { StatusBar } from "react-native";
import NavigationTabs from "./components/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false} backgroundColor="dodgerblue" />
      <NavigationTabs />
    </NavigationContainer>
  );
}
