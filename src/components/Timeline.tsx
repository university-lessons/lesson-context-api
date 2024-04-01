import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import { AppContext, useAppContext } from "../contexts/AppContext";

export default function Timeline() {
  // example using useContext (this is bad because you need to know the context and there's no check for the provider wrapper)
  // const app = useContext(AppContext);

  // example using our custom consumer hook (it's simpler):
  const app = useAppContext();

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
