import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <><Image
      source={require('@/assets/images/carleton-college-image.jpeg')}
      style={{ width: '100%', height: '15%' }} /><ThemedView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" >Welcome to Carleton College Navigator</ThemedText>
        </ThemedView>
      </ThemedView>
      
      <TouchableOpacity
      style={{ backgroundColor: '#007bff',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      margin: 50,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    }}
      >
        <ThemedText type="defaultSemiBold">Explore Carleton!</ThemedText>
      </TouchableOpacity>
      

      
      
      
      </>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 8,
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
