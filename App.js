import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderCover from './src/components/HeaderCover';
import Avatar from './src/components/Avatar';
import DarkModeToggle from './src/components/DarkMode';
import Bio from './src/components/Bio'; 


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkBackground]}>
      <HeaderCover isDarkMode={isDarkMode} />
      <Avatar />
      <DarkModeToggle toggle={toggleDarkMode} isDarkMode={isDarkMode} />
      <Bio isDarkMode={isDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#800000',
  },
  darkBackground: {
    backgroundColor: '#2c2c2c',
  },
});