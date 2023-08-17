import React from "react";
import { Text, View } from "react-native";
import { styles } from "../_layout";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>This the 🏠</Text>
      </View>
    </View>
  );
}
