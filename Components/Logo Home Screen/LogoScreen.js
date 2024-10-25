import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
      <View style={styles.overlay}>
        <Text style={styles.title}>RVS CAS HALBOOKING</Text>
        <Text style={styles.subtitle}>"A great venue sets the stage for unforgettable moments"</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  overlay: {
    flex: 1,
    bbackgroundColor: '#A52A2A', // Dark overlay for better text visibility
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32, // Larger title font size
    fontWeight: 'bold',
    color: '#A52A2A',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: '#000', // Text shadow for better visibility
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18, // Larger subtitle font size
    color: '#A52A2A',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20, // Add horizontal padding
  },
  button: {
    backgroundColor: '#A52A2A', // Button color
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
