import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import VerticalViewPager from "react-native-vertical-view-pager";

const { width, height } = Dimensions.get("window");

export default class Featured extends React.Component {
  render() {
    return (
      <VerticalViewPager showsVerticalScrollIndicator={false}>
        <View style={[styles.page_container, { backgroundColor: "pink" }]}>
          <Text>Featured Page</Text>
        </View>
      </VerticalViewPager>
    );
  }
}

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width,
    height
  }
});
