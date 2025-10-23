import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const vocabulary = [
  { greek: 'λόγος', english: 'word' },
  { greek: 'θεός', english: 'god' },
  { greek: 'ἄνθρωπος', english: 'man, human' },
  { greek: 'κόσμος', english: 'world' },
  { greek: 'φῶς', english: 'light' },
  { greek: 'ζωή', english: 'life' },
  { greek: 'ἡμέρα', english: 'day' },
  { greek: 'ἀλήθεια', english: 'truth' },
  { greek: 'γῆ', english: 'earth, land' },
  { greek: 'οὐρανός', english: 'heaven, sky' },
];

export default function GreekVocabulary() {
  return (
    <LinearGradient colors={['#ffecd2', '#fcb69f']} style={styles.container}>
      <Text style={styles.title}>Greek Vocabulary</Text>
      <Text style={styles.subtitle}>Tap a word to hear its pronunciation (coming soon!)</Text>

      <FlatList
        data={vocabulary}
        keyExtractor={(item) => item.greek}
        numColumns={2}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.greek}>{item.greek}</Text>
            <Text style={styles.english}>{item.english}</Text>
          </View>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    opacity: 0.8,
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 15,
    margin: 10,
    width: 140,
    alignItems: 'center',
  },
  greek: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  english: {
    fontSize: 16,
    color: '#ffe5d0',
    marginTop: 8,
  },
});