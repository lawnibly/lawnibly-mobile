import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { apiRequest } from '../lib/api';

export default function QuoteScreen() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await apiRequest('/api/quotes');
        setQuotes(data);
      } catch (err) {
        console.error('Failed to fetch quotes', err);
      }
    }
    load();
  }, []);

  function renderItem({ item }) {
    return (
      <View className="p-4 border-b">
        <Text className="font-medium">{item.service}</Text>
        <Text>Price: ${item.price}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={quotes}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        ListEmptyComponent={<Text className="p-4">No quotes</Text>}
      />
    </View>
  );
}
