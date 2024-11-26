import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchWeather } from '../api/WeatherApi';

const CityList = ({ city }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const loadWeather = async () => {
            const data = await fetchWeather(city);
            setWeather(data);
        };
        loadWeather();
    }, [city]);

    return (
        <View style={styles.container}>
            <Text style={styles.city}>{city}</Text>
            {weather && <Text style={styles.temp}>{weather.current.temp_c}°C</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    city: {
        fontSize: 18,
    },
    temp: {
        fontSize: 16,
        color: '#555',
    },
});

export default CityList;
