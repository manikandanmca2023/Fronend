import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Import local images
import house1 from '../../assets/hall-1.jpg';
import house2 from '../../assets/hall2.jpg';
import house3 from '../../assets/images.jpg';
import house4 from '../../assets/hall4.jpg';

const SearchResultsApp = ({ navigation }) => {
  const houseData = [
    {
      title: 'Kalam Hall',
      image: house1,
      details: '100 Seats . 1 Boardim',
      rating: '4.93 (167)',
      price: 'RVS CAS',
    },
    {
      title: 'C.K.Prakalad Hall',
      image: house2,
      details: '80 seats . 2 Boardim . 2 screen . AC',
      rating: '4.89 (120)',
      price: 'RVS CAS',
    },
    {
      title: 'VM Hall',
      image: house3,
      details: '150 Seats . ',
      rating: '4.93 (167)',
      price: 'RVS CAS',
    },
    {
      title: 'Dr.Newman Hall',
      image: house4,
      details: '50 Seats . AC',
      rating: '4.89 (120)',
      price: 'RVS CAS',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#aaa" />
        <TextInput 
          placeholder="Search" 
          placeholderTextColor="#aaa" 
          style={styles.searchInput} 
        />
      </View>

      {/* Scrollable Listings */}
      <ScrollView style={styles.scrollContainer}>
        {houseData.map((house, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card} 
            onPress={() => navigation.navigate('CartScreen', { title: house.title, image: house.image })}
          >
            <Image source={house.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{house.title}</Text>
              <Text style={styles.cardDetails}>{house.details}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.rating}>{house.rating}</Text>
                <Text style={styles.price}>{house.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  searchBar: {
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#911616',
  },
  searchInput: {
    color: '#000',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
    paddingBottom: 5,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDetails: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    color: '#FFD700', // Gold color for rating
    fontSize: 14,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default SearchResultsApp;
