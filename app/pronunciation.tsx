import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Animated, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

// Greek letter data
const greekLetters = [
  { id: '1', upper: 'Α', lower: 'α', name: 'Alpha', sound: 'a as in father' },
  { id: '2', upper: 'Β', lower: 'β', name: 'Beta', sound: 'b as in book' },
  { id: '3', upper: 'Γ', lower: 'γ', name: 'Gamma', sound: 'g as in go (before a, o, u)' },
  { id: '4', upper: 'Δ', lower: 'δ', name: 'Delta', sound: 'd as in dog' },
  { id: '5', upper: 'Ε', lower: 'ε', name: 'Epsilon', sound: 'e as in met' },
];

// Reusable flip-card component
function GreekLetterCard({ upper, lower, name, sound }: any) {
  const [flipped, setFlipped] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const frontInterpolate = animation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    Animated.spring(animation, {
      toValue: flipped ? 0 : 180,
      useNativeDriver: true,
    }).start();
    setFlipped(!flipped);
  };

  return (
    <Pressable onPress={flipCard}>
      <View style={styles.cardContainer}>
        {/* Front side */}
        <Animated.View
          style={[
            styles.card,
            { transform: [{ perspective: 1000 }, { rotateY: frontInterpolate }] },
          ]}
        >
          <Text style={styles.letter}>{upper}{lower}</Text>
          <Text style={styles.name}>{name}</Text>
        </Animated.View>

        {/* Back side */}
        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            { transform: [{ perspective: 1000 }, { rotateY: backInterpolate }] },
          ]}
        >
          <Text style={styles.sound}>{sound}</Text>
        </Animated.View>
      </View>
    </Pressable>
  );
}

// Main screen
export default function PronunciationScreen() {
  return (
    <LinearGradient colors={['#89f7fe', '#66a6ff']} style={styles.container}>
      <Text style={styles.title}>Greek Pronunciation Guide</Text>
      <FlatList
        data={greekLetters}
        renderItem={({ item }) => <GreekLetterCard {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </LinearGradient>
  );
}

// 🎨 Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  list: {
    alignItems: 'center',
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    width: 250,
    height: 150,
    backgroundColor: '#f5f7ff',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardBack: {
    backgroundColor: '#dbe4ff',
    position: 'absolute',
    top: 0,
  },
  letter: {
    fontSize: 48,
    fontWeight: '700',
    color: '#333',
  },
  name: {
    fontSize: 20,
    color: '#555',
    marginTop: 10,
  },
  sound: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});