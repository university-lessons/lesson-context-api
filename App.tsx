import { StyleSheet, View } from "react-native";
import Home from "./src/pages/Home";

import AppContextProvider from "./src/contexts/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </AppContextProvider>
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
