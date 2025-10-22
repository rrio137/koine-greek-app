import React, { useState } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';

interface FlashcardProps {
    greek: string;
    english: string;
}

export default function Flashcard({ greek, english }: FlashcardProps) {
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
        if (flipped) {
            Animated.spring(animation, { toValue: 0, useNativeDriver: true }).start();
        } else {
            Animated.spring(animation, { toValue: 180, useNativeDriver: true}).start();
        }
        setFlipped(!flipped);
    };

    return (
        <Pressable onPress={flipCard}>
    <Animated.View
      style={[
        styles.card,
        { transform: [{ perspective: 1000 }, { rotateY: frontInterpolate }] },
      ]}
    >
      <Text style={styles.textGreek}>{greek}</Text>
    </Animated.View>
    <Animated.View
      style={[
        styles.card,
        styles.cardBack,
        { transform: [{ perspective: 1000 }, { rotateY: backInterpolate }] },
      ]}
    >
        <Text style={styles.textEnglish}
            adjustsFontSizeToFit
            numberOfLines={2}
        >
            {english}
        </Text>
    </Animated.View>
  </Pressable>
);
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 150,
    backgroundColor: '#e8eaf6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 10, // prevent text touching edges
  },
  cardBack: {
    backgroundColor: '#e8e9f0ff',
    position: 'absolute',
    top: 0,
  },
  textGreek: {
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Merriweather_700Bold',
    textAlign: 'center',
    color: '#01020fff',
  },
  textEnglish: {
    fontSize: 22,
    fontFamily: 'Merriweather_400Regular',
    textAlign: 'center',
    color: '#263238',
    flexWrap: 'wrap',
    maxWidth: '90%', // ensures longer glosses stay centered
    lineHeight: 28, // improves readability
  },
});