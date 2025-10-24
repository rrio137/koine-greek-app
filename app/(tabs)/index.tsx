import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showingGreek, setShowingGreek] = useState(false);

  const greekText =
    'Οὕτως γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον, ὥστε τὸν Υἱὸν τὸν μονογενῆ ἔδωκεν, ἵνα πᾶς ὁ πιστεύων εἰς αὐτὸν μὴ ἀπόληται ἀλλ᾽ ἔχῃ ζωὴν αἰώνιον.';
  const englishText =
    'For God so loved the world, that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life.';

  useEffect(() => {
    const cycle = () => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }),
        Animated.delay(3000),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 2500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setShowingGreek((prev) => !prev); // ✅ triggers re-render
        cycle(); // 🔁 loop again
      });
    };

    cycle();
  }, [fadeAnim]);

  return (
    <LinearGradient colors={['#a8edea', '#fed6e3']} style={styles.container}>
      <Text style={styles.title}>Learn Koine Greek 📜</Text>
      <Text style={styles.subtitle}>Learn to speak the language of the Scriptures</Text>
      <View style={[styles.textContainer, { marginTop: 20 }]}>
        <Animated.Text
          style={[
            styles.verse,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          {showingGreek ? greekText : englishText}
        </Animated.Text>
      </View>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },
  textContainer: {
    width: '85%',
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  verse: {
    fontSize: 18,
    color: '#c56262ff',
    textAlign: 'center',
    lineHeight: 26,
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#555',
  },
});