import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile-hazel.jpg')}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',      
    top: 80,                  
    right: 20,                 
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,            
    borderColor: '#800000',  
  },
});

export default Avatar;