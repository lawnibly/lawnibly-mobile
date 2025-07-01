// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { apiRequest } from '../lib/api';

export default function CompletedJobsScreen() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiRequest('/api/jobs/completed');
        setJobs(data);
      } catch (err) {
        console.error('Failed to load completed jobs', err);
      }
    }
    load();
  }, []);

  function renderItem({ item }) {
    return (
      <View className="p-4 border-b">
        <Text className="font-medium">{item.address}</Text>
        <Text>{item.date}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={jobs}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        ListEmptyComponent={<Text className="p-4">No completed jobs</Text>}
      />
    </View>
  );
}
