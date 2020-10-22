import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StandardButton from './src/components/StandardButton';
import tailwind from 'tailwind-rn'

export default function App() {
  return (
    <View style={tailwind('bg-blue-500 h-full')}>
      <StandardButton/>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
