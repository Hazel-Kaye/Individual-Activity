// src/components/NameTitle/index.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const NameTitle = ({ isDarkMode }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.name, isDarkMode ? styles.darkText : styles.lightText]}>Hazel Kaye Baguioso</Text>
      <Text style={[styles.username, isDarkMode ? styles.darkText : styles.lightText]}>@yoora-hazel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    bottom: 30,
    left: 20,           
    alignItems: 'flex-start', 
  },

  name: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 10, 
  },

  username: {
    fontSize: 16,
    marginTop: -2,  
  },

  // Light mode
  lightText: {
    color: '#ffff', 
    textShadowColor: '#000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2, 
  },

  // Dark mode
  darkText: {
    color: '#F4C2C2', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2, 
  },
});

export default NameTitle;
