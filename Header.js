import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Top Designers</Text>
        <Image
          style={styles.headerPlus}
          source={require("./assets/plus.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 0,
    flexDirection: "row",
    height: 50
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 110
  },
  headerPlus: {
    height: 18,
    width: 18,
    marginLeft: 110
  }
});
