import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('AddPayment')}
      >
        <Text style={styles.buttonText}>Add Payment</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('GetallorderDate')}
      >
        <Text style={styles.buttonText}>Get All Order Data</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('OrderList')}
      >
        <Text style={styles.buttonText}>Get Particular Order</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('AddproductForm')}
      >
        <Text style={styles.buttonText}>Get Particular Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // Light background color
    padding: 20, // Added padding for better spacing
  },
  title: {
    fontSize: 30, // Increased font size for the title
    marginBottom: 30,
    fontWeight: 'bold', // Added font weight
    color: '#343a40', // Darker color for contrast
  },
  button: {
    backgroundColor: '#007bff', // Bootstrap primary color
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%', // Full width with margin
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // White text for contrast
    fontSize: 18,
  },
});

export default HomeScreen;