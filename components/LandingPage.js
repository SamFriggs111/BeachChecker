import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";

import { getNoticeText, getHelpText, getCongestion } from "./../api/api.js";
import { FontAwesome } from "@expo/vector-icons";

const NoticeTextView = () => {
  let notice = getNoticeText();
  return (
    <View style={[styles.textContainer, styles.noticeFlex]}>
      <Text style={styles.textNotice}>Notice:</Text>
      <Text style={styles.textPadding}>{notice.Intro}</Text>
      <Text style={styles.textPadding}>{notice.Desc}</Text>
    </View>
  );
};

const HelpTextView = () => {
  let help = getHelpText();
  return (
    <View style={[styles.textContainer, styles.helpFlex]}>
      <Text style={styles.textPadding}>{help}</Text>
    </View>
  );
};

const CongestionTextView = () => {
  let congestion = getCongestion();
  return congestion.map(warning => (
    <View style={({ width: 500 }, [styles.congestionView, styles.textPadding])}>
      <FontAwesome name="circle" size={24} color={warning.colour} />
      <Text style={[styles.textPadding, styles.congestionText]}>
        {warning.text}
      </Text>
    </View>
  ));
};

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 2, padding: 0 }}>
        <NoticeTextView></NoticeTextView>
        <HelpTextView></HelpTextView>
        <View style={[styles.textPadding, styles.congestionColour]}>
          <CongestionTextView></CongestionTextView>
        </View>
        <View style={[styles.congestionColour, { flex: 3.5 }]}></View>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: "rgba(158, 150, 150, .25)",
    borderBottomWidth: 1
  },
  textPadding: {
    paddingTop: 5,
    paddingBottom: 5
  },
  textNotice: {
    color: "red",
    fontSize: 24
  },
  congestionView: {
    flexDirection: "row",
    paddingRight: 75,
    paddingLeft: 75
  },
  congestionText: {
    marginLeft: 15
  },
  congestionColour: {
    backgroundColor: "white"
  },
  noticeFlex: {
    flex: 1.2
  },
  helpFlex: {
    flex: 1
  }
});
