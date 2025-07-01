// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { apiRequest } from '../lib/api';

export default function ProviderDashboard({ navigation }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await apiRequest('/api/jobs');
        setJobs(data);
      } catch (err) {
        console.error('Failed to fetch jobs', err);
      }
    }
    loadJobs();
  }, []);

  async function handleLogout() {
    await SecureStore.deleteItemAsync('token');
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('JobDetail', { jobId: item.id })}
        className="p-4 border-b"
      >
        <Text className="font-medium">{item.address}</Text>
        <Text>{item.date}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-semibold mb-4">Provider Dashboard</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No jobs available</Text>}
      />
      <View className="mt-4">
        <Button title="Completed Jobs" onPress={() => navigation.navigate('CompletedJobs')} />
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
}
