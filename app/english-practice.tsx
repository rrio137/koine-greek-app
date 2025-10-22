import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function EnglishPracticeScreen() {
  const partsOfSpeech = [
    { id: '1', title: 'Noun', definition: 'person, place, or thing', example: 'apple, teacher' },
    { id: '2', title: 'Verb', definition: 'action in a sentence', example: 'run, think' },
    { id: '3', title: 'Pronoun', definition: 'stand-in for a noun', example: 'he, they' },
    { id: '4', title: 'Preposition', definition: 'describes the disposition of a thing', example: 'under, after' },
    { id: '5', title: 'Conjunction', definition: 'word that connects nouns or clauses', example: 'and, but' },
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.definition}</Text>
      <Text style={styles.cardExample}>{item.example}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#89f7fe', '#66a6ff']} style={styles.container}>
      <Text style={styles.title}>English Grammar Basics</Text>
      <Text style={styles.subtitle}>Parts of Speech Overview</Text>

      <FlatList
        data={partsOfSpeech}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#e3f2fd',
    marginBottom: 20,
  },
  listContainer: {
    alignItems: 'center',
    paddingBottom: 60,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 20,
    marginVertical: 10,
    width: 260,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  cardExample: {
    fontSize: 16,
    color: '#e0f7fa',
  },
});