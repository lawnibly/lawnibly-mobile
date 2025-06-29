import React from "react";
import { View, Text, Button } from "react-native";
import * as SecureStore from "expo-secure-store";

export default function CustomerDashboard({ navigation }) {
  async function handleLogout() {
    await SecureStore.deleteItemAsync("token");
    navigation.reset({ index: 0, routes: [{ name: "Login" }] });
  }

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Customer Dashboard</Text>
      <Button
        title="Book Service"
        onPress={() => navigation.navigate("Book")}
      />
      <Button title="My Quotes" onPress={() => navigation.navigate("Quote")} />
      <Button
        title="My Bookings"
        onPress={() => navigation.navigate("MyBookings")}
      />
      <Button title="Payments" onPress={() => navigation.navigate("Payment")} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
