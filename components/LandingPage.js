import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from "react-native";

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 0 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }}>
          <Text style={{}}>Test</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
          <Text style={{}}>Test</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
          <Text style={{}}>Test</Text>
        </View>
        <View style={{ flex: 3, backgroundColor: 'powderblue' }}>
          <Text style={{}}>Test</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
