// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { apiRequest } from '../lib/api';

export default function JobDetailScreen({ route, navigation }) {
  const { jobId } = route.params || {};
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function loadJob() {
      try {
        const data = await apiRequest(`/api/jobs/${jobId}`);
        setJob(data);
      } catch (err) {
        console.error('Failed to load job', err);
      }
    }
    if (jobId) loadJob();
  }, [jobId]);

  async function handleAccept() {
    try {
      await apiRequest(`/api/jobs/${jobId}/accept`, { method: 'POST' });
      Alert.alert('Accepted', 'Job accepted');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Error', 'Could not accept job');
    }
  }

  if (!job) return (
    <View className="flex-1 items-center justify-center">
      <Text>Loading...</Text>
    </View>
  );

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-semibold mb-2">{job.address}</Text>
      <Text className="mb-2">Date: {job.date}</Text>
      <Text className="mb-4">Notes: {job.notes}</Text>
      <Button title="Accept Job" onPress={handleAccept} />
    </View>
  );
}
