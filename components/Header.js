import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  const headerContainerStylePjb = styles.headerContainerPjb;
  const headerTitleStylePjb = styles.headerTitlePjb;

  return (
    <View style={headerContainerStylePjb}>
      <Text style={headerTitleStylePjb}>Student Task & Blog App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainerPjb: {
    padding: 20,
    backgroundColor: '#FF6F61',
    alignItems: 'center',
  },
  headerTitlePjb: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
