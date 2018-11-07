import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import profiles from "./profiles.js";

import Card from "./Card";

export default class CardContainer extends Component {
  cards = profiles.map(profile => {
    return <Card data={profile} key={profile.name} />;
  });

  render() {
    return <View style={styles.cardContainer}>{this.cards}</View>;
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
