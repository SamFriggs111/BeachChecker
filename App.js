import "react-native-gesture-handler";

import * as React from "react";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LandingPage from "./components/LandingPage";
import MapsView from "./components/MapsView";
import FaqPage from "./components/FaqPage";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png"
          }}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

function landingScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="LandingPage">
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{
          title: "Beach Checker",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "deepskyblue"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      />
    </Stack.Navigator>
  );
}

function faqScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FaqPage">
      <Stack.Screen
        name="FaqPage"
        component={FaqPage}
        options={{
          title: "Beach Checker",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "deepskyblue"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 }
        }}
      >
        <Drawer.Screen
          name="LandingPage"
          options={{ drawerLabel: "Dashboard" }}
          component={landingScreenStack}
        />
        <Drawer.Screen
          name="FaqPage"
          options={{ drawerLabel: "FAQ's" }}
          component={faqScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
