import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

const greekLetters = [
  { english: 'A', greek: 'Α / α', name: 'Alpha' },
  { english: 'B', greek: 'Β / β', name: 'Beta' },
  { english: 'G', greek: 'Γ / γ', name: 'Gamma' },
  { english: 'D', greek: 'Δ / δ', name: 'Delta' },
  { english: 'E', greek: 'Ε / ε', name: 'Epsilon' },
];

export default function LetterGameScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState(shuffle(greekLetters));
  const [feedback, setFeedback] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const currentLetter = greekLetters[currentIndex];

  function shuffle<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const handleSelect = (choice: string) => {
    const correct = choice === currentLetter.greek;
    const text = correct ? `✅ Correct! ${currentLetter.name}` : '❌ Try again';
    setFeedback(text);
    animateFeedback(correct ? '#4CAF50' : '#FF5252');

    if (correct) {
      setTimeout(() => nextRound(), 1000);
    }
  };

  const animateFeedback = (color: string) => {
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

  const nextRound = () => {
    const nextIndex = (currentIndex + 1) % greekLetters.length;
    setCurrentIndex(nextIndex);
    setOptions(shuffle(greekLetters));
  };

  return (
    <LinearGradient colors={['#f6d365', '#fda085']} style={styles.container}>
      <Text style={styles.prompt}>Match the Greek letter for:</Text>
      <Text style={styles.englishLetter}>{currentLetter.english}</Text>

      <View style={styles.optionsContainer}>
        {options.map((opt, i) => (
          <Pressable
            key={i}
            style={styles.optionButton}
            onPress={() => handleSelect(opt.greek)}
          >
            <Text style={styles.optionText}>{opt.greek}</Text>
          </Pressable>
        ))}
      </View>

      <Animated.View
        style={[
          styles.feedbackContainer,
          { opacity: fadeAnim },
        ]}
      >
        <Text
          style={[
            styles.feedbackText,
            {
              color: feedback.includes('Correct') ? '#4CAF50' : '#FF5252',
            },
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
    marginBottom: 10,
  },
  englishLetter: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  optionsContainer: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  optionButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 15,
    margin: 8,
    borderRadius: 10,
    width: 120,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 24,
    color: '#fff',
  },
  feedbackContainer: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
  },
  feedbackText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
