import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const cities = [
    { id: '1', name: 'Bali', image: 'https://cdn-ilbjhnn.nitrocdn.com/UzaWnNlGMIDRjWEXrjLYmxYxPOtQLvHH/assets/images/optimized/rev-9cc84da/www.water-sport-bali.com/wp-content/uploads/2012/04/Tips-Wisata-Bali-2.jpg' },
    { id: '2', name: 'Jakarta', image: 'https://media.istockphoto.com/id/500798563/id/foto/city-skyline-at-sunset-jakarta-indonesia.jpg?s=612x612&w=0&k=20&c=dICfiBlbElOeu0UceZMoFpBJ7xJF5bKyriTRZmGXHO4=' },
    { id: '3', name: 'Surabaya', image: 'https://ikbis.ac.id/wp-content/uploads/2021/03/Anda-di-Surabaya-Inilah-Pentingnya-Menggunakan-Konsultan-Pajak-Surabaya.jpg' },
    { id: '4', name: 'Yogyakarta', image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/124/2024/05/02/Ragam-Julukan-Kota-Jogja-2335736460.jpeg' },
    { id: '5', name: 'Bandung', image: 'https://cekunganbandung.jabarprov.go.id/wp-content/uploads/2022/02/gesat-2.jpg' },
];

const HomeScreen = ({ navigation }) => {
    const handleCityPress = (cityName) => {
        navigation.navigate('Detail', { city: cityName });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cities}
                keyExtractor={(item) => item.id}
                numColumns={2} // Grid layout with 2 columns
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.tile}
                        onPress={() => handleCityPress(item.name)}
                    >
                        <Image source={{ uri: item.image }} style={styles.cityImage} />
                        <Text style={styles.cityText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#ffffff',
    },
    tile: {
        flex: 1,
        margin: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 2, // Shadow for Android
    },
    cityImage: {
        width: '100%',
        height: 120,
    },
    cityText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8,
        color: '#333',
    },
});

export default HomeScreen;
