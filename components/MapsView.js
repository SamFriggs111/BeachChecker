import * as React from "react";
import {
  Button,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from "react-native";
import MapView, { Polygon } from "react-native-maps";

const MapsView = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 0 }}>
        <View>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: 50.715733,
              longitude: -1.875273,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
          >
            <Polygon
              coordinates={[
                { name: "1", latitude: 50.710327, longitude: -1.898517 },
                { name: "2", latitude: 50.710045, longitude: -1.898772 },
                { name: "3", latitude: 50.711569, longitude: -1.893491 },
                { name: "4", latitude: 50.711868, longitude: -1.893727 },
              ]}
            />
          </MapView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MapsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
