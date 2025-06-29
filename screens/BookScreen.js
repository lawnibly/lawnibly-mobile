import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AddressAutocomplete from '../components/AddressAutocomplete';

export default function BookScreen() {
  const [address, setAddress] = useState(null);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  async function handleBook() {
    if (!address || !date) {
      Alert.alert('Missing info', 'Please select an address and date');
      return;
    }
    try {
      // TODO: replace with real API call
      const payload = {
        address: address.description,
        date,
        notes,
      };
      console.log('Booking payload', payload);
      Alert.alert('Booked', 'Your service has been scheduled');
    } catch (err) {
      Alert.alert('Error', 'Could not book service');
    }
  }

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-semibold mb-4">Book Service</Text>
      <AddressAutocomplete onAddressSelected={(data) => setAddress(data)} />
      <TextInput
        placeholder="Preferred date"
        value={date}
        onChangeText={setDate}
        className="border mb-4 p-2 rounded"
      />
      <TextInput
        placeholder="Notes (optional)"
        value={notes}
        onChangeText={setNotes}
        className="border mb-4 p-2 rounded"
      />
      <Button title="Confirm Booking" onPress={handleBook} />
    </View>
  );
}
