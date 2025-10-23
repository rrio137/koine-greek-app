import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';
import { Animated, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const punctuationMarks = [
  { id: '1', mark: '.', name: 'Period', meaning: 'Period (same as English)' },
  { id: '2', mark: '·', name: 'Raised Dot', meaning: 'Semicolon or colon' },
  { id: '3', mark: ',', name: 'Comma', meaning: 'Comma (same as English)' },
  { id: '4', mark: ';', name: 'Interrogation Mark', meaning: 'Question mark' },
];

function PunctuationCard({ mark, name, meaning }: any){
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
            friction: 8,
            tension: 10,
        }).start();
        setFlipped(!flipped);
    };

    return (
        <Pressable onPress={flipCard}>
            <View style={styles.cardContainer}>
                {/*Front */}
                <Animated.View
                    style={[
                        styles.card,
                        { transform: [{ perspective: 1000 }, {rotateY: frontInterpolate }] },
                    ]}
                >
                    <Text style={styles.mark}>{mark}</Text>
                    <Text style={styles.name}>{name}</Text>
                </Animated.View>

                {/* Back */}
                <Animated.View
                    style={[
                        styles.card,
                        styles.cardBack,
                        { transform: [{ perspective: 1000 }, { rotateY: backInterpolate }] },
                    ]}
                >
                    <Text style={styles.meaning}>{meaning}</Text>
                </Animated.View>
            </View>
        </Pressable>
    );
}

export default function GreekPunctuationScreen() {
    return (
        <LinearGradient colors={['#a1c4fd', '#c2e9fb']} style={styles.container}>
            <Text style={styles.title}>Greek Punctuation</Text>
            <FlatList
                data={punctuationMarks}
                renderItem={({ item }) => <PunctuationCard {...item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                /> 
        </LinearGradient>
    );
}

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
  mark: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
  },
  name: {
    fontSize: 20,
    color: '#555',
    marginTop: 10,
  },
  meaning: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});