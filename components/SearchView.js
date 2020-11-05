import * as React from "react";
import {
  Button,
  StatusBar,
  FlatList,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView, { Polygon } from "react-native-maps";
import MapsView from ".././components/MapsView";

const DATA = [
  {
    // id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Alum Chine Beach",
    latitude: 50.711054,
    longitude: -1.895746,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008,
  },
  {
    // id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Boscombe Beach",
    latitude: 50.719771,
    longitude: -1.841441,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const SearchView = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Map", { region: item })}
    >
      <Item title={item.title} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default SearchView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
