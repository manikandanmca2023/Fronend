// EventForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet, Alert, ScrollView } from 'react-native';
import config from '../Config File/config'; // Ensure to import your config
import axios from 'axios';

const EventForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [eventName, setEventName] = useState('');
    const [department, setDepartment] = useState('');
    const [coordinatorName, setCoordinatorName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [mediaAvailable, setMediaAvailable] = useState(false);
    const [mediaStatus, setMediaStatus] = useState({
        photo: false,
        video: false,
        reels: false,
    });

    const toggleMediaStatus = (mediaType) => {
        setMediaStatus((prevStatus) => ({
            ...prevStatus,
            [mediaType]: !prevStatus[mediaType],
        }));
    };

    const handleSubmit = async () => {
        // Basic validation
        if (!date || !time || !eventName || !department || !coordinatorName || !contact || !email) {
            Alert.alert('Error', 'Please fill all fields');
            return;
        }

        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address');
            return;
        }

        const eventData = {
            date,
            time,
            eventName,
            department,
            coordinatorName,
            contact,
            email,
            mediaAvailable,
            mediaStatus,
        };

        try {
            const response = await axios.post(`${config.BASE_URL}/api/events`, eventData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // The response will already be in JSON format
            console.log('Event saved:', response.data);
            Alert.alert('Success', 'Event saved successfully!');
            resetForm(); // Reset form after successful submission
        } catch (error) {
            console.error('Error saving event:', error);
            Alert.alert('Error', 'Failed to save event. Please try again later.');
        }
    };

    const resetForm = () => {
        setDate('');
        setTime('');
        setEventName('');
        setDepartment('');
        setCoordinatorName('');
        setContact('');
        setEmail('');
        setMediaAvailable(false);
        setMediaStatus({ photo: false, video: false, reels: false });
    };

    return (
        <ScrollView style={styles.container}>
            <Text>Date:</Text>
            <TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="YYYY-MM-DD" />
            <Text>Time:</Text>
            <TextInput style={styles.input} value={time} onChangeText={setTime} placeholder="HH:MM" />
            <Text>Event Name:</Text>
            <TextInput style={styles.input} value={eventName} onChangeText={setEventName} />
            <Text>Department:</Text>
            <TextInput style={styles.input} value={department} onChangeText={setDepartment} />
            <Text>Coordinator Name:</Text>
            <TextInput style={styles.input} value={coordinatorName} onChangeText={setCoordinatorName} />
            <Text>Contact:</Text>
            <TextInput style={styles.input} value={contact} onChangeText={setContact} keyboardType="numeric" />
            <Text>Email:</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
            <Text>Media Available:</Text>
            <Switch value={mediaAvailable} onValueChange={setMediaAvailable} />
            {mediaAvailable && (
                <View>
                    <Text>Media Status:</Text>
                    <View style={styles.mediaContainer}>
                        <Text>Photo</Text>
                        <Switch value={mediaStatus.photo} onValueChange={() => toggleMediaStatus('photo')} />
                    </View>
                    <View style={styles.mediaContainer}>
                        <Text>Video</Text>
                        <Switch value={mediaStatus.video} onValueChange={() => toggleMediaStatus('video')} />
                    </View>
                    <View style={styles.mediaContainer}>
                        <Text>Reels</Text>
                        <Switch value={mediaStatus.reels} onValueChange={() => toggleMediaStatus('reels')} />
                    </View>
                </View>
            )}
           <Button title="Submit" onPress={handleSubmit} color="#A52A2A" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1, // Ensure the ScrollView takes up all available space
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    mediaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
});

export default EventForm;
