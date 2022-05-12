import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

export default function ControlFooter() {
  const app = useContext(AppContext);

  return (
    <Text style={styles.text}>
      {app.musicTime} remaining on Track {app.track}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 16,
    fontSize: 12,
    color: "grey",
  },
});
