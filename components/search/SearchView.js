import * as React from "react";
import { Searchbar } from "react-native-paper";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { getBeachData } from "../../api/api";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const SearchView = ({ navigation }) => {
  let items = getBeachData();
  const [value, onChangeText] = React.useState("");
  const [data, setBeachData] = React.useState(items);
  const refreshing = false;

  const searchFilterFunction = text => {
    onChangeText(text);
    items = getBeachData();
    let newData = items;

    if (text) {
      newData = items.filter(item => {
        const itemData = item.title.toLowerCase();
        const textData = text.toLowerCase();

        return itemData.indexOf(textData) > -1;
      });
    }

    setBeachData(newData);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Map", { region: item })}
    >
      <Item title={item.title} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={text => searchFilterFunction(text)}
        value={value}
        style={styles.searchBar}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => "item" + item.id}
        refreshing={refreshing}
        onRefresh={() => {
          setBeachData(getBeachData());
        }}
      />
    </SafeAreaView>
  );
};

export default SearchView;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5
  },
  title: {
    fontSize: 32
  },
  searchBar: {
    marginBottom: 5
  }
});
