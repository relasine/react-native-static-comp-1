import React, { Component } from "react";
import Header from "./Header.js";
import Nav from "./Nav.js";
import CardContainer from "./CardContainer.js";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <CardContainer />
        <Nav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#1C1C1C",
    alignItems: "center"
  }
});
