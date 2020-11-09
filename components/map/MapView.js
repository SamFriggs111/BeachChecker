import React, { useRef, useState } from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  SafeAreaView,
} from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import MapView, { Polygon, Marker, Callout } from "react-native-maps";
import { getBeachData, getDefaultRegion, getCongestion } from "../../api/api";
import { useFocusEffect } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { styles, welcomeMessage } from "./styles";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const beachData = getBeachData();

// const [beachData, setBeachData] = useState(getBeachData());

const MapsPage = ({ route }) => {
  const [region, setCard] = useState(getDefaultRegion());
  const [index, setIndex] = useState(null);

  const [welcomeMesIsDisplayed, setWelcomeMessage] = useState(true);
  const [beachIsDisplayed, setBeach] = useState(false);

  const indexRef = useRef(index);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const beachRef = useRef(null);
  const welcomeRef = useRef(null);
  const paginationRef = useRef(null);
  const polyRef = useRef(null);

  const switchToBeach = (key) => {
    setCard(beachData[key - 1]);
    setIndex(beachData[key - 1].id - 1);
    setWelcomeMessage(false);
    setBeach(true);
  };

  const PolygonViews = () => {
    return beachData.map((data) => (
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
                      : styles.paginationDotInactive,
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
    return congestion.map((warning) => (
      <View style={[welcomeMessage.congestionView, welcomeMessage.textPadding]}>
        <FontAwesome name="circle" size={24} color={warning.colour} />
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
              {/* <TouchableNativeFeedback underlayColor="white">
                <AntDesign
                  style={welcomeMessage.close}
                  name="close"
                  size={30}
                  color="red"
                />
              </TouchableNativeFeedback> */}
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
                <Text style={styles.slideSubtitle}>Congestion signals</Text>
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
              <View style={styles.titleView}>
                <Text style={styles.slideTitle}>{region.title}</Text>
              </View>
              <View style={styles.sliders}>
                <Image
                  source={region.image ? region.image : null}
                  style={styles.slideImage}
                ></Image>
              </View>
              <View style={styles.warning}>
                <FontAwesome
                  name="circle"
                  size={20}
                  color={region.iconColour}
                />
                <Text style={styles.slideSubtitle}>
                  {region.congestion} congestion
                </Text>
              </View>
              <View style={styles.features}>
                <FontAwesome5 name="toilet" size={20} color="black" />
                <Entypo name="lifebuoy" size={20} color="black" />
                <FontAwesome5 name="dog" size={20} color="black" />
                <FontAwesome5 name="bicycle" size={20} color="black" />
                <MaterialCommunityIcons name="grill" size={20} color="black" />
              </View>
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
          longitudeDelta: 0.017,
        },
        2000
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
        region={region}
        ref={mapRef}
        // onPress={closeWindow()}
      >
        <PolygonViews></PolygonViews>
      </MapView>
      <AnimatedCard></AnimatedCard>
      <WelcomeView />
      <Pagination index={index}></Pagination>
    </SafeAreaView>
  );
};

export default MapsPage;
