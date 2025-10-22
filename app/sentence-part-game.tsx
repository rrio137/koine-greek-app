import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

const sentenceBank = [
  {
    sentence: ['John', 'and', 'Mary', 'went', 'to', 'the', 'park.'],
    parts: {
      subject: 'John',
      conjunction: 'and',
      predicate: 'went',
      preposition: 'to',
      directObject: 'park.',
    },
    order: ['subject', 'conjunction', 'predicate', 'preposition', 'directObject'],
  },
  {
    sentence: ['The', 'cat', 'sat', 'on', 'the', 'mat.'],
    parts: {
      subject: 'cat',
      predicate: 'sat',
      preposition: 'on',
      directObject: 'mat.',
    },
    order: ['subject', 'predicate', 'preposition', 'directObject'],
  },
  {
    sentence: ['Paul', 'wrote', 'a', 'letter', 'to', 'the', 'church.'],
    parts: {
      subject: 'Paul',
      predicate: 'wrote',
      directObject: 'letter',
      preposition: 'to',
      indirectObject: 'church.',
    },
    order: ['subject', 'predicate', 'directObject', 'preposition', 'indirectObject'],
  },
];

type PartKey = keyof typeof sentenceBank[number]['parts'];

export default function SentencePartGame() {
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [sentenceData, setSentenceData] = useState(sentenceBank[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * sentenceBank.length);
    setSentenceData(sentenceBank[randomIndex]);
  }, []);

  const currentPart = sentenceData.order[currentPartIndex] as PartKey;
  const correctWord = sentenceData.parts[currentPart];

  const animateFeedback = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 800);
    });
  };

  const handlePress = (word: string) => {
    const isCorrect = word === correctWord;
    setFeedback(isCorrect ? `✅ Correct! ${capitalize(currentPart)}` : '❌ Try again');
    animateFeedback();

    if (isCorrect) {
      setTimeout(() => {
        if (currentPartIndex < sentenceData.order.length - 1) {
          setCurrentPartIndex(currentPartIndex + 1);
        } else {
          setFeedback('🎉 All parts identified!');
        }
      }, 1000);
    }
  };

  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <LinearGradient colors={['#a1c4fd', '#c2e9fb']} style={styles.container}>
      <Text style={styles.prompt}>
        Press the <Text style={styles.highlight}>{currentPart}</Text>
      </Text>

      <View style={styles.sentenceContainer}>
        {sentenceData.sentence.map((word, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.wordButton,
              pressed && { backgroundColor: 'rgba(255,255,255,0.4)' },
            ]}
            onPress={() => handlePress(word)}
          >
            <Text style={styles.wordText}>{word}</Text>
          </Pressable>
        ))}
      </View>

      <Animated.View style={[styles.feedbackContainer, { opacity: fadeAnim }]}>
        <Text
          style={[
            styles.feedbackText,
            { color: feedback.includes('Correct') ? '#4CAF50' : '#FF5252' },
          ]}
        >
          {feedback}
        </Text>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prompt: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#ffe066',
  },
  sentenceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '85%',
    marginBottom: 40,
  },
  wordButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
  wordText: {
    fontSize: 22,
    color: '#fff',
  },
  feedbackContainer: {
    position: 'absolute',
    bottom: 80,
  },
  feedbackText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
