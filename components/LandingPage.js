import * as React from "react";
import {
  Button,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from "react-native";

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 0 }}>
        <View></View>
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
