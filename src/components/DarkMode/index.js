import React from 'react';
import { Switch, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const DarkModeToggle = ({ toggle, isDarkMode }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, isDarkMode && styles.darkContainer]} 
      onPress={toggle}
    >
      <Icon 
        name={isDarkMode ? 'light-mode' : 'dark-mode'} 
        size={24} 
        color={isDarkMode ? '#fff' : '#000'} 
        style={styles.icon} 
      />
      <Text style={[styles.label, isDarkMode && styles.darkLabel]}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Text>
      <Switch
        onValueChange={toggle}
        value={isDarkMode}
        thumbColor={isDarkMode ? '#b20000' : '#b20000'}  // Change thumb color for both modes
        trackColor={{ false: '#ff9999', true: '#ff9999' }}  // Optional: Change track color
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  // Light mode 
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 100,
    backgroundColor: '#ffe5ff', 
    margin: 20,
    borderWidth: 2,          
    borderColor: '#0C0404',
    justifyContent: 'flex-start', 
  },

  label: {
    marginRight: 10,
    fontSize: 18,
    color: '#000',
  },

  // Dark mode
  darkContainer: {
    backgroundColor: '#3D0C02',
    borderRadius: 100,        
    borderWidth: 2,          
    borderColor: '#800000',
  },
  
  darkLabel: {
    color: '#F4C2C2', 
  },

  icon: {
    marginRight: 5, 
  },
});

export default DarkModeToggle;
