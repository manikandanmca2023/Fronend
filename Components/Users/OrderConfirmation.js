// OrderConfirmation.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderConfirmation = ({ route }) => {
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmation</Text>
      <Text style={styles.subTitle}>Your order has been placed!</Text>
      <Text style={styles.totalText}>Total: Rs.{order.total.toFixed(2)}</Text>
      <Text style={styles.itemsTitle}>Items:</Text>
      {order.items.map(item => (
        <Text key={item.id} style={styles.itemText}>
          {item.name} (x{item.quantity}) - Rs.{(item.price * item.quantity).toFixed(2)}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default OrderConfirmation;
