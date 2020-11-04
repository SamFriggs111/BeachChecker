import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView
} from "react-native";

import { getNoticeText, getHelpText, getCongestion } from "./../api/api.js"
import { FontAwesome } from '@expo/vector-icons';

const NoticeTextView = () => {
  let notice = getNoticeText();
  return (
    <View style={styles.textContainer}>
      <Text style={{color: "red"}}>Notice:</Text>
      <Text style={styles.textPadding}>{notice.Intro}</Text>
      <Text style={styles.textPadding}>{notice.Desc}</Text>
    </View>
  ); 
};

const HelpTextView = () => {
  let help = getHelpText();
  return (
    <View style={styles.textContainer}>
      <Text style={styles.textPadding}>{help}</Text>
    </View>
  ); 
};

const CongestionTextView = () => {
  let congestion = getCongestion();
  return congestion.map(warning => (
    <View style={{width: 500}, [styles.congestionView, styles.textPadding]}>
      <FontAwesome name="circle" size={24} color={warning.colour} />
      <Text style={[styles.textPadding, styles.congestionText]}>{warning.text}</Text>
    </View>
  ));
};

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1, padding: 0 }}>
        <NoticeTextView></NoticeTextView>
        <HelpTextView></HelpTextView>
        <View style={[styles.textPadding, styles.congestionColour]}>
          <CongestionTextView></CongestionTextView>
        </View>
        <View style={{ flex: 4, backgroundColor: 'powderblue' }}>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1,
  },
  textPadding: {
    paddingTop: 5,
    paddingBottom: 5
  },
  congestionView: {
    flexDirection: "row",
    paddingRight: 75,
    paddingLeft: 75,
  },
  congestionText: {
    marginLeft: 5
  },
  congestionColour: {
    backgroundColor: 'white'
  }
});
