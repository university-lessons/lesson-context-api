import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/Home";

import { AppContext, AppContextProps } from "./src/contexts/AppContext";
import { useState } from "react";

export default function App() {
  const [track, setTrack] = useState(1);

  const appContext: AppContextProps = {
    track,
    prev: () => {
      if (track > 1) setTrack(track - 1);
    },
    next: () => {
      setTrack(track + 1);
    },
    musicTime: 1.55,
  };

  return (
    <AppContext.Provider value={appContext}>
      <View style={styles.container}>
        <Home />
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
