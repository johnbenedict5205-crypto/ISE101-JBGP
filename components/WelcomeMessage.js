import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeMessage() {
  const studentNamePjb = 'John Benedict';
  const sectionPjb = 'BSIS Section 1';

  const welcomeCardStylePjb = styles.welcomeCardPjb;
  const welcomeTextStylePjb = styles.welcomeTextPjb;
  const sectionTextStylePjb = styles.sectionTextPjb;

  return (
    <View style={welcomeCardStylePjb}>
      <Text style={welcomeTextStylePjb}>Hello, {studentNamePjb}!</Text>
      <Text style={sectionTextStylePjb}>{sectionPjb}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeCardPjb: {
    backgroundColor: '#E8F5E9',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
    width: '85%',
    alignItems: 'center',
  },
  welcomeTextPjb: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },
  sectionTextPjb: {
    fontSize: 18,
    color: '#1B5E20',
  },
});
