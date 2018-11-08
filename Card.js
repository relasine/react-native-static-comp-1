import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default class Card extends Component {
  render() {
    const { data } = this.props;
    const { color } = data;
    return (
      <View style={[color, styles.card]}>
        <Image style={styles.profilePic} source={data.path} />
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.cardButton}>
          <View style={styles.cardBtnWrapper}>
            <Image
              style={styles.cardIcon}
              source={require("./assets/user.png")}
            />
          </View>
          <View style={styles.cardBtnWrapper}>
            <Image
              style={styles.cardIcon}
              source={require("./assets/message.png")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    width: 150,
    height: 200,
    margin: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  profilePic: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    marginTop: 20,
    marginBottom: 20
  },
  name: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  title: {
    color: "#fff",
    fontSize: 10,
    textAlign: "center"
  },
  cardButton: {
    flex: 2,
    flexDirection: "row"
  },
  cardBtnWrapper: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255, 0.4)",
    marginTop: 15,
    marginLeft: 7,
    marginRight: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  cardIcon: {
    width: 15,
    height: 15
  }
});
