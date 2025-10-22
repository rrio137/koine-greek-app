import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const grammarConcepts = [
   {
    title: 'Subject',
    definition:
      'The subject is the person, place, thing, or idea that performs the action or is described in the sentence.',
    example: 'Example: “The dog” barked loudly.',
  },
  {
    title: 'Predicate',
    definition:
      'The predicate tells what the subject does or is. It always contains the verb.',
    example: 'Example: The dog “barked loudly.”',
  },
  {
    title: 'Direct Object',
    definition:
      'A direct object receives the action of the verb directly.',
    example: 'Example: She kicked “the ball.”',
  },
  {
    title: 'Indirect Object',
    definition:
      'An indirect object tells to whom or for whom the action of the verb is done.',
    example: 'Example: She gave “him” a gift.',
  },
  {
    title: 'Complement',
    definition:
      'A complement completes the meaning of the predicate by renaming or describing the subject.',
    example: 'Example: He is “a teacher.”',
  },
];

export default function EnglishMechanicsScreen() {
    return (
        <LinearGradient
            colors={['#d4fc79', '#96e6a1']}
            style={styles.container}
            >
                <Text style={styles.title}>English Grammar Mechanics</Text>
                <Text style={styles.subtitle}>Learn how sentences are built and how parts relate</Text>

                <ScrollView contentContainerStyle={styles.scroll}>
                    {grammarConcepts.map((item, index) => (
                        <View key={index} style={styles.card}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Text style={styles.definition}>{item.definition}</Text>
                            <Text style={styles.example}>{item.example}</Text>
                        </View>
                    ))}
                </ScrollView>
            </LinearGradient>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  scroll: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f2f2f',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffffcc',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  definition: {
    fontSize: 16,
    color: '#444',
    marginBottom: 6,
  },
  example: {
    fontSize: 16,
    color: '#555',
    fontStyle: 'italic',
  },
});