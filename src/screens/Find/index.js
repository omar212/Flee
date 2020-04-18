import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";

export default class Find extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Flee')}
        >
          <Button title="Go">Press Here</Button>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});
