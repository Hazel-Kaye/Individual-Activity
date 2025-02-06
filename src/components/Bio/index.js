import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';  // <-- Added import for TouchableOpacity

const Bio = ({ isDarkMode }) => {
  const [bioText, setBioText] = useState(
    'HI! my name is Hazel Kaye you can call me Zel, Kaye or Kai.'
  );
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(bioText);

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    setBioText(inputText);
    setIsEditing(false);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>
        Profile
      </Text>

      {isEditing ? (
        <TextInput
          style={[styles.input, isDarkMode && styles.darkInput]}
          value={inputText}
          onChangeText={setInputText}
        />
      ) : (
        <Text
          style={[styles.bioText, isDarkMode ? styles.darkBioText : styles.lightBioText]}
        >
          {bioText}
        </Text>
      )}

      {isEditing ? (
        <TouchableOpacity
          onPress={handleSavePress}
          style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleEditPress}
          style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      )}
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
    borderRadius: 20, // Rounded border radius
    height: 180,
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

  lightButton: {
    backgroundColor: '#0C0404',
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

  darkButton: {
    backgroundColor: '#F4C2C2',
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Adds border radius
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Bio;
