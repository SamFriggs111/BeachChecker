import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from "react-native";
import MapView, { Polygon } from "react-native-maps";

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

  const region = route.params ? route.params.region : defaultRegion;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 0 }}>
        <View>
          <MapView style={styles.mapStyle} region={region}>
            <Polygon
              fillColor="#1dad31"
              coordinates={[
                {
                  name: "topLeft",
                  latitude: 50.709998,
                  longitude: -1.899228
                },
                {
                  name: "bottomLeft",
                  latitude: 50.70974,
                  longitude: -1.899223
                },
                {
                  name: "bottomRight",
                  latitude: 50.711558,
                  longitude: -1.893613
                },
                {
                  name: "topRight",
                  latitude: 50.711806,
                  longitude: -1.893869
                }
              ]}
            />
            <Polygon
              fillColor="#e3780e"
              coordinates={[
                {
                  name: "topLeft",
                  latitude: 50.70746,
                  longitude: -1.906429
                },
                {
                  name: "bottomLeft",
                  latitude: 50.707354,
                  longitude: -1.906306
                },
                {
                  name: "bottomRight",
                  latitude: 50.70974,
                  longitude: -1.899223
                },
                {
                  name: "topRight",
                  latitude: 50.709998,
                  longitude: -1.899228
                }
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
