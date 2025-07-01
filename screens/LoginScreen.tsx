// @ts-nocheck
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import * as SecureStore from '../utils/secureStore';
import { apiRequest } from '../lib/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    if (!email || !password) return;
    try {
      const data = await apiRequest('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      await SecureStore.setItemAsync('token', data.token);
      if (data.role === 'provider') {
        navigation.reset({ index: 0, routes: [{ name: 'ProviderDashboard' }] });
      } else if (data.role === 'admin') {
        navigation.reset({ index: 0, routes: [{ name: 'AdminDashboard' }] });
      } else {
        navigation.reset({ index: 0, routes: [{ name: 'CustomerDashboard' }] });
      }
    } catch (err) {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
  }

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-semibold mb-4">Login</Text>
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
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}
