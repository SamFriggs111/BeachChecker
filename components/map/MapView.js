import React, { useRef, useState } from "react";
import { View, TouchableNativeFeedback, SafeAreaView } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import MapView, { Polygon } from "react-native-maps";
import { getBeachData, getDefaultRegion } from "../../api/api";
import { useFocusEffect } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import BeachDetailView from "./overlay/BeachDetailView";
import WelcomeDetailView from "./overlay/WelcomeDetailView";

const beachData = getBeachData();

const MapsView = ({ route }) => {
  const [region, setCard] = useState(getDefaultRegion());
  const [index, setIndex] = useState(null);

  const [welcomeMesIsDisplayed, setWelcomeMessage] = useState(true);
  const [beachIsDisplayed, setBeach] = useState(false);
  const [time, setTime] = useState(1);

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

  const Pagination = ({ index }) => {
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
  };

  const AnimatedCard = () => {
    return (
      <View>
        {beachIsDisplayed ? (
          <Animatable.View
            ref={beachRef}
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

  const WelcomeViewCard = () => {
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
            <WelcomeDetailView />
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
      <AnimatedCard />
      <WelcomeViewCard />
      <Pagination index={index}></Pagination>
    </SafeAreaView>
  );
};

export default MapsView;
