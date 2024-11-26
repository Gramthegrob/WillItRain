import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ForecastDetails = ({ route }) => {
    const { day } = route.params; // Ambil data dari navigasi
    const hourlyData = day.hour; // Data per jam

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hourly Forecast for {day.date}</Text>
            <FlatList
                data={hourlyData}
                keyExtractor={(item) => item.time}
                renderItem={({ item }) => (
                    <View style={styles.hourContainer}>
                        <Text style={styles.time}>{item.time.split(' ')[1]}</Text>
                        <Image
                            source={{ uri: `https:${item.condition.icon}` }}
                            style={styles.icon}
                        />
                        <Text style={styles.temp}>{item.temp_c}°C</Text>
                        <Text style={styles.condition}>{item.condition.text}</Text>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.details}>Wind: {item.wind_kph} kph</Text>
                            <Text style={styles.details}>Humidity: {item.humidity}%</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    hourContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
    },
    time: {
        fontSize: 16,
        width: 60,
        fontWeight: '500',
        color: '#333',
    },
    icon: {
        width: 40,
        height: 40,
        marginHorizontal: 8,
    },
    temp: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 8,
        color: '#333',
    },
    condition: {
        fontSize: 16,
        flex: 1,
        color: '#555',
        fontStyle: 'italic',
    },
    detailsContainer: {
        marginLeft: 8,
    },
    details: {
        fontSize: 12,
        color: '#555',
    },
});

export default ForecastDetails;
