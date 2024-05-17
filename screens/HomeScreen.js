import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import WineList from '../components/WineList';
import wines from '../data/Wines';

const HomeScreen = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypePress = (type) => {
    setSelectedType(type === selectedType ? null : type);
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedType === null && styles.selectedTab]}
          onPress={() => handleTypePress(null)}
        >
          <Text style={styles.tabText}>All Wine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedType === 'Red' && styles.selectedTab]}
          onPress={() => handleTypePress('Red')}
        >
          <Text style={styles.tabText}>Red</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedType === 'White' && styles.selectedTab]}
          onPress={() => handleTypePress('White')}
        >
          <Text style={styles.tabText}>White</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedType === 'Sparkling' && styles.selectedTab]}
          onPress={() => handleTypePress('Sparkling')}
        >
          <Text style={styles.tabText}>Sparkling</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedType === 'Rose' && styles.selectedTab]}
          onPress={() => handleTypePress('Rose')}
        >
          <Text style={styles.tabText}>Rose</Text>
        </TouchableOpacity>
      </View>
      <WineList wines={wines} selectedType={selectedType} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: 35,
    backgroundColor: 'crimson',
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'cornsilk',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  selectedTab: {
    backgroundColor: 'crimson',
  },
  tabText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
