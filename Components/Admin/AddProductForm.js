import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import config from '../Config File/config'; // Import your config file for the base URL

const OrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ items: [], total: 0 });

  // Function to fetch existing orders from the backend
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${config.BASE_URL}/api/orders`);
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      Alert.alert('Error', 'Could not fetch orders');
    }
  };

  // Function to create a new order
  const createOrder = async () => {
    try {
      const response = await axios.post(`${config.BASE_URL}/api/orders`, newOrder);
      Alert.alert('Success', response.data.message);
      setNewOrder({ items: [], total: 0 }); // Reset the new order state
      fetchOrders(); // Refresh the orders list
    } catch (error) {
      console.error('Error creating order:', error);
      Alert.alert('Error', 'Could not create order');
    }
  };

  useEffect(() => {
    fetchOrders(); // Fetch orders on component mount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>

      {/* Input fields for new order */}
      <TextInput
        style={styles.input}
        placeholder="Items (comma separated)"
        onChangeText={text => setNewOrder({ ...newOrder, items: text.split(',').map(item => item.trim()) })}
      />
      <TextInput
        style={styles.input}
        placeholder="Total"
        keyboardType="numeric"
        onChangeText={text => setNewOrder({ ...newOrder, total: parseFloat(text) })}
      />
      
      <TouchableOpacity style={styles.button} onPress={createOrder}>
        <Text style={styles.buttonText}>Create Order</Text>
      </TouchableOpacity>

      {/* Display the list of orders */}
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text style={styles.orderText}>Order ID: {item._id}</Text>
            <Text style={styles.orderText}>Total: Rs.{item.total}</Text>
            <Text style={styles.orderText}>Items: {item.items.map(i => `${i.name} (x${i.quantity})`).join(', ')}</Text>
          </View>
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orderItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  orderText: {
    fontSize: 16,
  },
});

export default OrdersScreen;
