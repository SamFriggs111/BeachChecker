import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="aliceblue"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'aliceblue' }}
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Notifications}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Notifications}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker-circle" size={24} color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen
        name="Faq"
        component={Notifications}
        options={{
          tabBarLabel: 'FAQ',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="frequently-asked-questions" size={24} color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={Profile}
        options={{
          tabBarLabel: 'Feedback',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="feedback" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
