import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function UserScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Assuming "Login" is the name of your LoginScreen component
    navigation.navigate('Login');
  };

  return (
    <View style={styles.userContainer}>
      <Text style={{ fontWeight: 'bold' }}>User Screen</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    marginTop: 35,
    backgroundColor: 'crimson',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'cornsilk',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
