import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PracticeScreen() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#f6d365', '#fda085']} style={styles.container}>
      <Text style={styles.title}>Practice</Text>
      <Text style={styles.subtitle}>Work on your daily drills and quizzes.</Text>

      <View style={styles.buttonGroup}>
        {/* Greek Pronunciation Guide */}
        <View style={styles.buttonContainer}>
          <Button
            title="Greek Pronunciation Guide"
            onPress={() => router.push('/pronunciation')}
            color="#b16e6eff"
          />
        </View>

        {/* English Grammar Basics */}
        <View style={styles.buttonContainer}>
          <Button
            title="English Grammar Basics"
            onPress={() => router.push('/english-practice')}
            color="#b16e6eff"
          />
        </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#ffe5d0',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonGroup: {
    gap: 20, // space between the buttons
    width: '70%',
  },
  buttonContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 10,
    overflow: 'hidden',
  },
});