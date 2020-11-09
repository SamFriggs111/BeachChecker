import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  SafeAreaView
} from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign
} from "@expo/vector-icons";
import MapView, { Polygon } from "react-native-maps";
import { getBeachData, getDefaultRegion, getCongestion } from "../../api/api";
import { useFocusEffect } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { styles, welcomeMessage } from "./Styles";
import BeachDetailView from "./overlay/BeachDetailView";

const beachData = getBeachData();

const MapsView = ({ route }) => {
  const [region, setCard] = useState(getDefaultRegion());
  const [index, setIndex] = useState(null);

  const [welcomeMesIsDisplayed, setWelcomeMessage] = useState(true);
  const [beachIsDisplayed, setBeach] = useState(false);
  const [time, setTime] = useState(1);

  const indexRef = useRef(index);
  const mapRef = useRef(null);
  const beachRef = useRef(null);
  const welcomeRef = useRef(null);
  const paginationRef = useRef(null);
  const polyRef = useRef(null);

  const switchToBeach = key => {
    setTime(2000);
    setCard(beachData[key - 1]);
    setIndex(beachData[key - 1].id - 1);
    setWelcomeMessage(false);
    setBeach(true);
  };

  const PolygonViews = () => {
    return beachData.map(data => (
      <Polygon
        ref={polyRef}
        key={data.id}
        onPress={() => switchToBeach(data.id)}
        tappable={true}
        fillColor={data.polygonColour}
        strokeColor={data.polygonColour}
        coordinates={data.polygonCoordinates}
      />
    ));
  };

  function Pagination({ index }) {
    return (
      <View>
        {beachIsDisplayed ? (
          <Animatable.View ref={paginationRef} style={styles.pagination}>
            {beachData.map((_, key) => {
              return (
                <View
                  key={key}
                  style={[
                    styles.paginationDot,
                    index === key
                      ? styles.paginationDotActive
                      : styles.paginationDotInactive
                  ]}
                />
              );
            })}
          </Animatable.View>
        ) : null}
      </View>
    );
  }

  const CongestionTextView = () => {
    const congestion = getCongestion();
    return congestion.map(warning => (
      <View
        key={warning.id}
        style={[welcomeMessage.congestionView, welcomeMessage.textPadding]}
      >
        <FontAwesome name="circle" size={20} color={warning.colour} />
        <Text
          style={[welcomeMessage.textPadding, welcomeMessage.congestionText]}
        >
          {warning.text}
        </Text>
      </View>
    ));
  };

  const WelcomeView = () => {
    return (
      <View>
        {welcomeMesIsDisplayed ? (
          <Animatable.View
            ref={welcomeRef}
            style={[styles.slide, styles.carousel]}
          >
            <TouchableNativeFeedback
              underlayColor="white"
              onPress={() => changeBeachDirection(null, 9)}
            >
              <Ionicons
                style={styles.sliderArrow}
                name="ios-arrow-back"
                size={54}
                color="white"
              />
            </TouchableNativeFeedback>
            <View style={styles.innerSlide}>
              <View style={styles.titleView}>
                <Text style={welcomeMessage.slideTitle}>
                  Welcome to the south coast
                </Text>
              </View>
              <View style={styles.sliders}>
                <Text style={welcomeMessage.slideDesc}>
                  Simply interact with a beach of your choice to view congestion
                </Text>
              </View>
              <View style={welcomeMessage.warning}>
                <Text style={welcomeMessage.signal}>Congestion signals</Text>
              </View>
              <CongestionTextView />
            </View>
            <TouchableNativeFeedback
              underlayColor="white"
              onPress={() => changeBeachDirection(null, 10)}
            >
              <Ionicons
                style={styles.sliderArrow}
                name="ios-arrow-forward"
                size={54}
                color="white"
              />
            </TouchableNativeFeedback>
          </Animatable.View>
        ) : null}
      </View>
    );
  };

  indexRef.current = index;

  useFocusEffect(() => {
    if (route.params) {
      setCard(route.params.region);
      setWelcomeMessage(false);
      setBeach(true);
    }
    if (mapRef.current) {
      route.params = null;
      mapRef.current.animateToRegion(
        {
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.017,
          longitudeDelta: 0.017
        },
        time
      );
      setIndex(region.id - 1);
    }
  }, []);

  const closeWindow = () => {
    if (beachIsDisplayed) {
      beachRef.current.flipOutY();
      paginationRef.current.flipOutY();
    }
    if (welcomeMesIsDisplayed) welcomeRef.current.flipOutY();
  };

  const changeBeachDirection = (direction, jumpTo) => {
    setTime(2000);
    if (!jumpTo) {
      let index = region.id - 1;
      if (direction == "left") {
        setCard(beachData[index - 1]);
        setIndex(beachData[index - 1].id - 1);
      } else if (direction == "right") {
        setCard(beachData[index + 1]);
        setIndex(beachData[index + 1].id - 1);
      }
    } else {
      setCard(beachData[jumpTo - 1]);
      setIndex(beachData[jumpTo - 1].id - 1);
      setWelcomeMessage(false);
      setBeach(true);
    }
  };

  const BeachOverlay = () => {
    return (
      <View ref={beachRef}>
        {beachIsDisplayed ? (
          <Animatable.View
            animation="flipInY"
            iterationCount={1}
            direction="alternate"
            style={[styles.slide, styles.carousel]}
          >
            <TouchableNativeFeedback
              underlayColor="white"
              onPress={() => changeBeachDirection("left")}
            >
              <Ionicons
                style={styles.sliderArrow}
                name="ios-arrow-back"
                size={54}
                color="white"
              />
            </TouchableNativeFeedback>
            <View style={styles.innerSlide}>
              <TouchableNativeFeedback
                underlayColor="white"
                onPress={closeWindow}
              >
                <AntDesign
                  style={styles.close}
                  name="close"
                  size={30}
                  color="red"
                />
              </TouchableNativeFeedback>
              <BeachDetailView region={region} />
            </View>
            <TouchableNativeFeedback
              underlayColor="white"
              onPress={() => changeBeachDirection("right")}
            >
              <Ionicons
                style={styles.sliderArrow}
                name="ios-arrow-forward"
                size={54}
                color="white"
              />
            </TouchableNativeFeedback>
          </Animatable.View>
        ) : null}
      </View>
    );
  };

  return (
    <SafeAreaView>
      <MapView
        style={styles.mapStyle}
        defaultRegion={{
          latitude: region.latitude,
          longitude: region.latitude,
          latitudeDelta: 0.0017,
          longitudeDelta: 0.0017
        }}
        ref={mapRef}
      >
        <PolygonViews></PolygonViews>
      </MapView>
      <BeachOverlay />
      <WelcomeView />
      <Pagination index={index}></Pagination>
    </SafeAreaView>
  );
};

export default MapsView;
