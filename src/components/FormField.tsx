import { View, Text, Button } from "react-native";
import React from "react";
import { useFirebaseContext } from "../contexts/AppContext";

export default function FormField() {
  const ctx = useFirebaseContext();

  const handlePress = () => {
    const length = Math.floor(Math.random() * 5) + 1;
    let randomString = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    ctx.updateDocument(randomString);
  };

  return (
    <View>
      <Text>FormField</Text>

      <Text>DOC: {ctx.document}</Text>
      <Button title="Update Document (random)" onPress={handlePress} />
    </View>
  );
}
