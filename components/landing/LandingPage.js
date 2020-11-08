import * as React from "react";
import { Text, View } from "react-native";

import { getNoticeText, getHelpText, getCongestion } from "../../api/api.js";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

const NoticeTextView = () => {
  const notice = getNoticeText();
  return (
    <View style={[styles.textContainer, styles.noticeFlex]}>
      <Text style={styles.textNotice}>{notice.Title}</Text>
      <Text style={styles.textPadding}>{notice.Intro}</Text>
      <Text style={styles.textPadding}>{notice.Desc}</Text>
    </View>
  );
};

const HelpTextView = () => {
  const help = getHelpText();
  return (
    <View style={[styles.textContainer, styles.helpFlex]}>
      <Text style={styles.textPadding}>{help}</Text>
    </View>
  );
};

const CongestionTextView = () => {
  const congestion = getCongestion();
  return congestion.map(warning => (
    <View style={({ width: 500 }, [styles.congestionView, styles.textPadding])}>
      <FontAwesome name="circle" size={24} color={warning.colour} />
      <Text style={[styles.textPadding, styles.congestionText]}>
        {warning.text}
      </Text>
    </View>
  ));
};

const LandingPage = () => {
  return (
    <View style={{ flex: 1, padding: 0 }}>
      <NoticeTextView style={{ flex: 1 }}></NoticeTextView>
      <HelpTextView></HelpTextView>
      {/* <View style={[styles.textPadding, styles.congestionColour]}>
        <CongestionTextView></CongestionTextView>
      </View> */}
      <View style={[styles.congestionColour, { flex: 1.5 }]}></View>
    </View>
  );
};

export default LandingPage;
