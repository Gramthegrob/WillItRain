import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { fetchForecast } from '../api/WeatherApi';

const ForecastScreen = ({ navigation }) => {
    const city = 'Semarang'; // Kota yang ingin ditampilkan
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        const loadForecast = async () => {
            try {
                const data = await fetchForecast(city, 3); // Mengambil prakiraan cuaca 3 hari
                setForecast(data.forecast.forecastday);
            } catch (error) {
                console.error('Error loading forecast data', error);
            }
        };
        loadForecast();
    }, [city]);

    if (!forecast) return <Text>Loading...</Text>;

    const handleDayPress = (day) => {
        // Navigasi ke ForecastDetailsScreen dengan parameter data hari yang dipilih
        navigation.navigate('ForecastDetails', { day });
    };

    return (
        <View style={styles.container}>
            {/* Banner Gambar Kota Semarang */}
            <Image
                style={styles.banner}
                source={{
                    uri: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2022/10/20/semarangjpg-20221020111008.jpg',
                }}
            />
            {/* Nama Kota */}
            <Text style={styles.city}>{city}</Text>

            {/* Daftar Prakiraan Cuaca */}
            <FlatList
                data={forecast}
                keyExtractor={(item) => item.date}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.forecastItem}
                        onPress={() => handleDayPress(item)}
                    >
                        <Text style={styles.date}>{item.date}</Text>
                        <Text>Max: {item.day.maxtemp_c}°C</Text>
                        <Text>Min: {item.day.mintemp_c}°C</Text>
                        <Text>Condition: {item.day.condition.text}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    banner: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 20, // Rounded corners
    },
    city: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    forecastItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 10,
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ForecastScreen;
