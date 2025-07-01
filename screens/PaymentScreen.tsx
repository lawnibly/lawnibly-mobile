// @ts-nocheck
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function PaymentScreen() {
  function handlePay() {
    // TODO integrate with Stripe
    Alert.alert('Payment', 'Stripe checkout would appear here');
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Button title="Pay Now" onPress={handlePay} />
    </View>
  );
}
