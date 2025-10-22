import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Flashcard from '../../components/Flashcard';
import vocabData from '../../data/vocab.json';

// ✅ Explicitly tell TypeScript what the JSON looks like
interface VocabWord {
  greek: string;
  english: string;
  partOfSpeech: string;
}

// ✅ Tell TS that this is an array of those words
const vocab: VocabWord[] = vocabData as VocabWord[];

export default function FlashcardScreen() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    const next = Math.floor(Math.random() * vocab.length);
    setIndex(next);
  };

  const currentWord = vocab[index];

  return (
    <LinearGradient
      colors={['#89f7fe', '#66a6ff']}  // 💧 cool cyan → deep blue
      style={styles.container}
    >
      <Text style={styles.title}>Flashcards</Text>

      <View style={styles.cardWrapper}>
        <Flashcard greek={currentWord.greek} english={currentWord.english} />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Next Word" onPress={nextCard} color="#ac3737ff" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  cardWrapper: {
    alignItems: 'center',
  },
  buttonWrapper: {
    marginTop: 30,
    width: 160,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
});