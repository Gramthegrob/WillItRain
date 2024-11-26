import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchWeather } from '../api/WeatherApi';

const DetailScreen = ({ route }) => {
    const { city } = route.params;
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadWeather = async () => {
            try {
                const data = await fetchWeather(city);
                setWeather(data.current);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);
            }
        };
        loadWeather();
    }, [city]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading weather details...</Text>
            </View>
        );
    }

    if (!weather) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Failed to load weather data.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{city}</Text>
            <Image source={{ uri: `https:${weather.condition.icon}` }} style={styles.weatherImage} />
            <Text style={styles.conditionText}>{weather.condition.text}</Text>
            <Text style={styles.tempText}>Temperature: {weather.temp_c}°C</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    weatherImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    conditionText: {
        fontSize: 18,
        marginBottom: 5,
    },
    tempText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default DetailScreen;
