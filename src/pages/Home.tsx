import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFirebaseContext } from "../contexts/AppContext";
import Card from "../components/Card";

// firebase precisa ser inicializado! loading 2s
// depois de inicializado, podemos acessar o document (useState string)

export default function Home() {
  return (
    <View>
      <Text>Home</Text>

      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
