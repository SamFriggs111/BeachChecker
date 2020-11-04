import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from "react-native";
import getNoticeText from "./../api/api.js"

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

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1, padding: 0 }}>
        <NoticeTextView></NoticeTextView>
        <View style={styles.textContainer}>
          <Text style={{}}>
            Colour coded maps are for guidance only and predict likely crowding of promenade and beach areas today based on previous footfall, CCTV, weather patterns and observation. Information is then updated via live observation by the Seafront Team between 11am - 5pm.
          </Text>
        </View>
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
    paddingRight: 10
  },
  textPadding: {
    paddingTop: 3,
    paddingBottom: 3
  }
});
