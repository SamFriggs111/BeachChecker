import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Text,
  Button,
} from "react-native";
import { getDefaultRegion, getBeachData } from ".././api/api";
import MapView, { Callout, Marker, Polygon } from "react-native-maps";

const beachData = getBeachData();
// console.log(route.params);

const PolygonViews = () => {
  return beachData.map((data) => (
    // fillColor="#1dad31"
    <Polygon fillColor="green" coordinates={data.polygonCoordinates} />
  ));
};

const MapsView = ({ route }) => {
  const defaultRegion = getDefaultRegion();
  const region = route.params ? route.params.region : defaultRegion;
  console.log(region);
  const markerRef = useRef(null);

  const onRegionChangeComplete = () => {
    if (markerRef && markerRef.current && markerRef.current.showCallout) {
      markerRef.current.showCallout();
    }
  };

  const CustomCallouts = () => {
    return beachData.map((data) => (
      <Marker ref={markerRef} coordinate={region}>
        <Callout>
          <Text>Tester123</Text>
          <Text>Tester123</Text>
          <Button title="test"></Button>
        </Callout>
      </Marker>
    ));
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
            <PolygonViews></PolygonViews>
            <CustomCallouts></CustomCallouts>
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
