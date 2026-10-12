import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeMessage from '../components/WelcomeMessage';

export default function HomeScreen() {
  const containerStylePjb = styles.containerPjb;
  const bodyStylePjb = styles.bodyPjb;
  const textStylePjb = styles.textPjb;

  return (
    <View style={containerStylePjb}>
      <Header />
      <View style={bodyStylePjb}>
        <WelcomeMessage />
        <Text style={textStylePjb}>Welcome to your first screen!</Text>
        <Text style={textStylePjb}>This is built using JSX and components.</Text>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPjb: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  bodyPjb: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  textPjb: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333333',
  },
});
