import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Timeline() {
  const app = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text>Timeline - Track {app.track}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 24,
  },
});
