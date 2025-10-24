import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function JourneyScreen () {
  const router = useRouter();

  const lessons = [
    { id: 1, title: 'Lesson 1: Greek Alphabet', route: '/lesson1' },
    { id: 2, title: 'Lesson 2: Greek Verbs P.A.I.', route: '/lesson2' },
    { id: 3, title: 'Lesson 3: Nouns First Declension', route: '/lesson3' },
    { id: 4, title: 'Lesson 4: Nouns Second Declension', route: '/lesson4' },
    { id: 5, title: 'Lesson 5: Articles', route: '/lesson5' },
  ];

  return (
    <LinearGradient colors={['#d9a7c7', '#fffcdc']} style={styles.container}>
      <Text style={styles.title}>Your Koine Greek Journey</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {lessons.map((lesson, index) => (
          <View key={lesson.id} style={styles.nodeContainer}>
            {/* Line connecting previous node to current */}
            {index !== 0 && <View style={styles.line} />}

            <Pressable
              style={({ pressed }) => [
                styles.node,
                pressed && { backgroundColor: '#f7d1ba'},
              ]}
              onPress={() => router.push(lesson.route)}
              >
                <Text style={styles.nodeText}>{lesson.id}</Text>
              </Pressable>

              <Text style={styles.lessonTitle}>{lesson.title}</Text>
          </View>
        ))}
        </ScrollView>  
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  nodeContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  node: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fceabb',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  nodeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  lessonTitle: {
    marginTop: 10,
    textAlign: 'center',
    color: '#111010ff',
    fontSize: 12,
    width: 200,
  },
  line: {
    position: 'absolute',
    left: -60,
    top: 40,
    width: 60,
    height: 2,
    backgroundColor: 'rgba(233, 12, 203, 0.5)',
  },
});