import { Button, StyleSheet, View } from "react-native";

import { useAppContext } from "../contexts/AppContext";
import ControlFooter from "./ControlFooter";

export default function Control() {
  const app = useAppContext();

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
