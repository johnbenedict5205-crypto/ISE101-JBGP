import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  const footerContainerStylePjb = styles.footerContainerPjb;
  const footerTextStylePjb = styles.footerTextPjb;

  return (
    <View style={footerContainerStylePjb}>
      <Text style={footerTextStylePjb}>© 2025 Student App Project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainerPjb: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },
  footerTextPjb: {
    fontSize: 12,
    color: '#333333',
  },
});
