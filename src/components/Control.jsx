import { View, StyleSheet, Button } from "react-native";
import React, { useContext } from "react";

import ControlFooter from "./ControlFooter";
import AppContext from "../contexts/AppContext";

export default function Control() {
  const app = useContext(AppContext);

  const handlePrev = () => {
    app.prev();
  };
  const handleNext = () => {
    app.next();
  };

  return (
    <>
      <View style={styles.container}>
        <Button title="Prev" onPress={handlePrev} />
        <Button title="Next" onPress={handleNext} />
      </View>
      <ControlFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
