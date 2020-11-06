import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Text,
  Button,
} from "react-native";
import { getDefaultRegion } from ".././api/api";
import MapView, { Callout, Marker, Polygon } from "react-native-maps";

const MapsView = ({ route }) => {
  const defaultRegion = getDefaultRegion();
  const region = route.params ? route.params.region : defaultRegion;
  const markerRef = useRef(null);

  const onRegionChangeComplete = () => {
    if (markerRef && markerRef.current && markerRef.current.showCallout) {
      markerRef.current.showCallout();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 0 }}>
        <View>
          <MapView
            style={styles.mapStyle}
            region={region}
            onRegionChangeComplete={onRegionChangeComplete}
          >
            <Polygon
              fillColor="#1dad31"
              coordinates={[
                {
                  name: "topLeft",
                  latitude: 50.709998,
                  longitude: -1.899228,
                },
                {
                  name: "bottomLeft",
                  latitude: 50.70974,
                  longitude: -1.899223,
                },
                {
                  name: "bottomRight",
                  latitude: 50.711558,
                  longitude: -1.893613,
                },
                {
                  name: "topRight",
                  latitude: 50.711806,
                  longitude: -1.893869,
                },
              ]}
            />
            <Polygon
              fillColor="#e3780e"
              coordinates={[
                {
                  name: "topLeft",
                  latitude: 50.70746,
                  longitude: -1.906429,
                },
                {
                  name: "bottomLeft",
                  latitude: 50.707354,
                  longitude: -1.906306,
                },
                {
                  name: "bottomRight",
                  latitude: 50.70974,
                  longitude: -1.899223,
                },
                {
                  name: "topRight",
                  latitude: 50.709998,
                  longitude: -1.899228,
                },
              ]}
            />
            <Marker
              ref={markerRef}
              coordinate={{ latitude: 50.710778, longitude: -1.8964205 }}
            >
              <Callout resizeMode="cover">
                <Text>Tester123</Text>
                <Text>Tester123</Text>
                <Button title="test"></Button>
              </Callout>
            </Marker>
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
