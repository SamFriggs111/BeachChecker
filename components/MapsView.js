import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from "react-native";
import MapView, { Polygon } from "react-native-maps";
// import { NavigationEvents } from "react-navigation";
import { useNavigationState } from "react-navigation";

const MapsView = ({ route, navigation }) => {
  const defaultRegion = {
    latitude: 50.715733,
    longitude: -1.875273,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008
  };
  // const routesLength = useNavigationState(state => state.routes.length);
  const [activeBeach, changeBeach] = useState(
    route.params ? route.params.region : defaultRegion
  );

  console.log("before effect", route.params.region);
  const region = route.params.region;

  // React.useEffect(
  //   () =>
  //     navigation.addListener("focus", () => {
  //       console.log("after effect", region);
  //       changeBeach(region);
  //       // console.log("beach", [route.params.region, activeBeach]);
  //     }),
  //   []
  // );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 0 }}>
        <View>
          <MapView style={styles.mapStyle} region={activeBeach}>
            <Polygon
              coordinates={[
                { name: "1", latitude: 50.710327, longitude: -1.898517 },
                { name: "2", latitude: 50.710045, longitude: -1.898772 },
                { name: "3", latitude: 50.711569, longitude: -1.893491 },
                { name: "4", latitude: 50.711868, longitude: -1.893727 }
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
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
