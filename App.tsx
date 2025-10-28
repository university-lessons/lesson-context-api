import { StyleSheet, View } from "react-native";
import Home from "./src/pages/Home";
import FirebaseContextProvider from "./src/contexts/AppContext";

// Se usar expo router, o provider vai no _layout mais externo!

export default function App() {
  return (
    <FirebaseContextProvider>
      <View style={styles.container}>
        <Home />
      </View>
    </FirebaseContextProvider>
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
