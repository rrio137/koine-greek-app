import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';

export default function JourneyScreen() {
  return (
    <LinearGradient
      colors={['#cfd9df', '#e2ebf0']}
      style={styles.container}
    >
      <Text style={styles.title}>Journey</Text>
      <Text style={styles.subtitle}>Follow your path through lessons and mastery.</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#555',
  },
});