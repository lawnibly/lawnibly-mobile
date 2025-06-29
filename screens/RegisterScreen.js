import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { apiRequest } from '../lib/api';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister() {
    if (!email || !password) return;
    try {
      await apiRequest('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      Alert.alert('Account created', 'You can now log in');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Error', 'Could not register');
    }
  }

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-semibold mb-4">Register</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        className="border mb-4 p-2 rounded"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="border mb-4 p-2 rounded"
      />
      <Button title="Create Account" onPress={handleRegister} />
    </View>
  );
}
