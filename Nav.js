import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Nav extends Component {
  render() {
    return (
      <View style={styles.navWrapper}>
        <View style={styles.searchCircle}>
          <Image
            style={styles.searchIcon}
            source={require("./assets/search.png")}
          />
        </View>
        <View style={styles.nav}>
          <View style={styles.outsideButtonsLeft}>
            <Image
              style={styles.navIcons}
              source={require("./assets/home.png")}
            />
            <Text style={styles.navText}>Home</Text>
          </View>
          <Text style={styles.searchText}>Search</Text>
          <View style={styles.outsideButtonsRight}>
            <Image
              style={styles.navIcons}
              source={require("./assets/settings.png")}
            />
            <Text style={styles.navText}>Settings</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navWrapper: {
    position: "absolute",
    bottom: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  nav: {
    backgroundColor: "#303030",
    height: 50,
    width: 330,
    borderRadius: 12,
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  searchCircle: {
    position: "absolute",
    top: -30,
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: "#303030",
    borderColor: "#1c1c1c",
    borderWidth: 6,
    zIndex: 2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  searchIcon: {
    width: 20,
    height: 20
  },
  navIcons: {
    marginTop: 3,
    marginBottom: 3,
    width: 20,
    height: 20
  },
  navText: {
    color: "#939393",
    fontSize: 10,
    textAlign: "center"
  },
  searchText: {
    marginTop: 28,
    position: "relative",
    color: "#939393",
    fontSize: 10,
    textAlign: "center"
  },
  outsideButtonsRight: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    marginLeft: 35
  },
  outsideButtonsLeft: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 35
  }
});
