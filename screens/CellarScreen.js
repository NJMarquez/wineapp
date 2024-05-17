import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native';

export default function CartScreen() {
  const [showInputs, setShowInputs] = useState(false);
  const [wineName, setWineName] = useState('');
  const [wineType, setWineType] = useState('');
  const [wineBrand, setWineBrand] = useState('');
  const [winePrice, setWinePrice] = useState('');

  const handleAddWine = () => {
    // Submit wine details logic can go here
    console.log('Wine added:', { wineName, wineType, wineBrand, winePrice });

    // Reset input fields
    setWineName('');
    setWineType('');
    setWineBrand('');
    setWinePrice('');

    // Hide input fields
    setShowInputs(false);
  };

  const handleCancel = () => {
    // Reset input fields
    setWineName('');
    setWineType('');
    setWineBrand('');
    setWinePrice('');

    // Hide input fields
    setShowInputs(false);
  };

  return (
    <View style={styles.cellarContainer}>
      {!showInputs && (
        <Pressable style={styles.addButton} onPress={() => setShowInputs(true)}>
          <Text style={styles.buttonText}>Add Wine</Text>
        </Pressable>
      )}

      {showInputs && (
        <>
          <Text style={styles.addlabel}>Enter Wine Details</Text>
          <Text style={styles.label}>Wine Name:</Text>
          <TextInput
            style={styles.input}
            value={wineName}
            onChangeText={setWineName}
            placeholder="Enter Wine Name"
          />

          <Text style={styles.label}>Wine Type:</Text>
          <TextInput
            style={styles.input}
            value={wineType}
            onChangeText={setWineType}
            placeholder="Enter Wine Type"
          />

          <Text style={styles.label}>Wine Brand:</Text>
          <TextInput
            style={styles.input}
            value={wineBrand}
            onChangeText={setWineBrand}
            placeholder="Enter Wine Brand"
          />

          <Text style={styles.label}>Wine Price:</Text>
          <TextInput
            style={styles.input}
            value={winePrice}
            onChangeText={setWinePrice}
            placeholder="Enter Wine Price"
            keyboardType="numeric"
          />

          <View style={styles.buttonContainer}>
            <Pressable style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.addButton} onPress={handleAddWine}>
              <Text style={styles.buttonText}>Add Wine</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cellarContainer: {
    marginTop: 35,
    backgroundColor: 'crimson',
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    backgroundColor: 'cornsilk',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  addButton: {
    backgroundColor: 'burlywood',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: 'burlywood',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  addlabel: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic',
  },
});
