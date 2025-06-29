import React from "react";
import { View, Text, Button } from "react-native";
import * as SecureStore from "expo-secure-store";
export default function ProviderDashboard({ navigation }) {
  async function handleLogout() {
    await SecureStore.deleteItemAsync("token");
    navigation.reset({ index: 0, routes: [{ name: "Login" }] });
  }

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Provider Dashboard</Text>
      <Button
        title="Available Jobs"
        onPress={() => navigation.navigate("AvailableJobs")}
      />
      <Button
        title="Completed Jobs"
        onPress={() => navigation.navigate("CompletedJobs")}
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
