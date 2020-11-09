import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { getCongestion } from "../../../api/api";
import { styles, welcomeMessage } from "../styles";

const CongestionTextView = () => {
  const congestion = getCongestion();
  return congestion.map(warning => (
    <View
      key={warning.id}
      style={[welcomeMessage.congestionView, welcomeMessage.textPadding]}
    >
      <FontAwesome name="circle" size={20} color={warning.colour} />
      <Text style={[welcomeMessage.textPadding, welcomeMessage.congestionText]}>
        {warning.text}
      </Text>
    </View>
  ));
};

const WelcomeDetailView = () => {
  return (
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
  );
};

export default WelcomeDetailView;
