// @ts-nocheck
import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import * as SecureStore from "../utils/secureStore";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    async function checkToken() {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        navigation.reset({ index: 0, routes: [{ name: "CustomerDashboard" }] });
      } else {
        navigation.reset({ index: 0, routes: [{ name: "Login" }] });
      }
    }
    checkToken();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
