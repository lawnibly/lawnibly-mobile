// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { apiRequest } from '../lib/api';

export default function AvailableJobsScreen({ navigation }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const data = await apiRequest('/api/jobs');
        setJobs(data);
      } catch (err) {
        console.error('Error fetching jobs', err);
      }
    }
    fetchJobs();
  }, []);

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
    <View className="flex-1 bg-white">
      <FlatList
        data={jobs}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        ListEmptyComponent={<Text className="p-4">No jobs available</Text>}
      />
    </View>
  );
}
