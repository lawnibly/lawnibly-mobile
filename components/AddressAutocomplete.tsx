// @ts-nocheck
import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function AddressAutocomplete({ onAddressSelected }) {
  return (
    <View className="mb-4">
      <GooglePlacesAutocomplete
        placeholder="Search Address"
        onPress={(data, details = null) => onAddressSelected(data, details)}
        fetchDetails
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_PLACES_KEY || 'YOUR_GOOGLE_API_KEY',
          language: 'en',
        }}
        styles={{
          textInput: {
            padding: 8,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 4,
          },
        }}
      />
    </View>
  );
}
