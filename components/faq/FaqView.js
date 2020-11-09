import * as React from "react";
import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  SafeAreaView,
} from "react-native";

import { getNoticeText, getHelpText, getCongestion } from "../../api/api.js";
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import styles from "./styles";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const FaqView = () => {
  return (
    <View style={{ flex: 1, padding: 0 }}>
      <View style={[styles.congestionColour, { flex: 1.5 }]}>
        {/* <Animatable.View
          ref={AnimationRef}
          animation="flipInY"
          iterationCount={1}
          direction="alternate"
          style={[styles.slide, styles.carousel]}
        > */}
        <TouchableNativeFeedback
          underlayColor="white"
          //   onPress={() => changeBeachDirection("left")}
        >
          <Ionicons
            style={styles.sliderArrow}
            name="ios-arrow-back"
            size={54}
            color="white"
          />
        </TouchableNativeFeedback>
        <View style={styles.innerSlide}>
          <TouchableNativeFeedback underlayColor="white">
            <AntDesign
              style={styles.close}
              name="close"
              size={30}
              color="red"
            />
          </TouchableNativeFeedback>
          <View style={styles.titleView}>
            <Text style={styles.slideTitle}>Test</Text>
          </View>
          <View style={styles.sliders}></View>
          <View style={styles.warning}>
            <FontAwesome name="circle" size={20} color="black" />
            <Text style={styles.slideSubtitle}>congestion</Text>
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
          //   onPress={() => changeBeachDirection("right")}
        >
          <Ionicons
            style={styles.sliderArrow}
            name="ios-arrow-forward"
            size={54}
            color="white"
          />
        </TouchableNativeFeedback>
        {/* </Animatable.View> */}
      </View>
    </View>
  );
};

export default FaqView;
