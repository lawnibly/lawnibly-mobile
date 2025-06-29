import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import CustomerDashboard from "../screens/CustomerDashboard";
import ProviderDashboard from "../screens/ProviderDashboard";
import BookScreen from "../screens/BookScreen";
import QuoteScreen from "../screens/QuoteScreen";
import MyBookingsScreen from "../screens/MyBookingsScreen";
import PaymentScreen from "../screens/PaymentScreen";
import AvailableJobsScreen from "../screens/AvailableJobsScreen";
import JobDetailScreen from "../screens/JobDetailScreen";
import CompletedJobsScreen from "../screens/CompletedJobsScreen";
import AdminDashboard from "../screens/AdminDashboard";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="CustomerDashboard" component={CustomerDashboard} />
      <Stack.Screen name="ProviderDashboard" component={ProviderDashboard} />
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="Quote" component={QuoteScreen} />
      <Stack.Screen name="MyBookings" component={MyBookingsScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="AvailableJobs" component={AvailableJobsScreen} />
      <Stack.Screen name="JobDetail" component={JobDetailScreen} />
      <Stack.Screen name="CompletedJobs" component={CompletedJobsScreen} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
    </Stack.Navigator>
  );
}
