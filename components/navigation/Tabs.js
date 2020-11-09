import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import LandingPage from "../landing/LandingPage";
import SearchView from "../SearchView";
import MapsView from "../map/MapsView";

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="aliceblue"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: "aliceblue" }}
    >
      <Tab.Screen
        name="Home"
        component={LandingPage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchView}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapsView}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-marker-circle"
              size={24}
              color={color}
              size={26}
            />
          )
        }}
      />
      <Tab.Screen
        name="Faq"
        component={MapsView}
        options={{
          tabBarLabel: "FAQ",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              size={24}
              color={color}
              size={26}
            />
          )
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={MapsView}
        options={{
          tabBarLabel: "Feedback",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="feedback" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
