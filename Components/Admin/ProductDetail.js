import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import config from '../Config File/config';

const EventList = () => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        console.log(`Fetching from URL: ${config.BASE_URL}/api/events`); // Log URL
        try {
            const response = await axios.get(`${config.BASE_URL}/api/events`);
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error.response ? error.response.data : error.message);
            Alert.alert('Error', 'Failed to fetch events. Please try again later.');
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Event List:</Text>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <View key={index} style={styles.eventContainer}>
                        <Text style={styles.eventName}>{event.eventName}</Text>
                        <Text>Date: {event.date}</Text>
                        <Text>Time: {event.time}</Text>
                        {/* Display other event details as needed */}
                    </View>
                ))
            ) : (
                <Text>No events found.</Text>
            )}
            <Button title="Refresh Events" onPress={fetchEvents} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    eventContainer: {
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    eventName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EventList;
