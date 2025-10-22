import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';

export default function EnglishGrammarScreen() {
  return (
    <LinearGradient colors={['#fbc2eb', '#a6c1ee']} style={styles.container}>
      <Text style={styles.title}>English Grammar Basics</Text>
      <Text style={styles.subtitle}>Coming soon!</Text>
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#e0f7ff',
  },
});