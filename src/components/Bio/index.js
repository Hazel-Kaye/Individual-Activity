import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bio = ({ isDarkMode }) => {
  const bioText = 'HI! my name is Hazel Kaye you can call me Zel, Kaye or Kai.';

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>
      Profile
      </Text>
      <Text style={[styles.bioText, isDarkMode ? styles.darkBioText : styles.lightBioText]}>
        {bioText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },

  bioText: {
    fontSize: 16,
    marginBottom: 10,
  },

  // Light Mode
  container: {
    padding: 20,
    borderRadius: 100,
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#0C0404',
  },

  lightTitle: {
    color: '#fff',
  },

  lightBioText: {
    color: '#fff',
  },

  // Dark Mode
  darkContainer: {
    backgroundColor: '#3D0C02',
  },
  
  darkTitle: {
    color: '#F4C2C2',
  },
  
  darkBioText: {
    color: '#F4C2C2',
  },
});

export default Bio;
