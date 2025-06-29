import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { apiRequest } from '../lib/api';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await apiRequest('/api/admin/users');
        setUsers(data);
      } catch (err) {
        console.error('Failed to fetch users', err);
      }
    }
    fetchUsers();
  }, []);

  function renderItem({ item }) {
    return (
      <View className="p-4 border-b">
        <Text className="font-medium">{item.email}</Text>
        <Text>Role: {item.role}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={users}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        ListEmptyComponent={<Text className="p-4">No users found</Text>}
      />
    </View>
  );
}
