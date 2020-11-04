import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from "react-native";
import { getNoticeText, getHelpText } from "./../api/api.js"

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

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1, padding: 0 }}>
        <NoticeTextView></NoticeTextView>
        <HelpTextView></HelpTextView>
        <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
          <Text style={{}}>Test</Text>
        </View>
        <View style={{ flex: 4, backgroundColor: 'powderblue' }}>
          <Text style={{}}>Test</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    // paddingTop: 10,
    // paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  textPadding: {
    paddingTop: 3,
    paddingBottom: 3
  }
});
