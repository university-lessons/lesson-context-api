import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Timeline from "../components/Timeline";
import Control from "../components/Control";

export default function Home() {
  return (
    <View>
      <Text style={styles.text}>Home - Music Player</Text>

      <Timeline />
      <Control />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
