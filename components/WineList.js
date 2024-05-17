import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import WineItem from './WineItem';

const WineList = ({ wines, selectedType }) => {
  const filteredWines = selectedType ? wines.filter(wine => wine.type === selectedType) : wines;

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={filteredWines}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <WineItem wine={item} />}
      numColumns={1} // Set the number of columns to 1 for a single column layout
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WineList;