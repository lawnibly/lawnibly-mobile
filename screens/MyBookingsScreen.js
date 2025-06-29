import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { apiRequest } from '../lib/api';

export default function MyBookingsScreen() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiRequest('/api/bookings');
        setBookings(data);
      } catch (err) {
        console.error('Failed to fetch bookings', err);
      }
    }
    load();
  }, []);

  function renderItem({ item }) {
    return (
      <View className="p-4 border-b">
        <Text className="font-medium">{item.address}</Text>
        <Text>{item.date}</Text>
        <Text>Status: {item.status}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={bookings}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        ListEmptyComponent={<Text className="p-4">No bookings</Text>}
      />
    </View>
  );
}
