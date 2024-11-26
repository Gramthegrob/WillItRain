import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1146/1146869.png', // URL langsung ke gambar
                }}
            />
            <Text style={styles.name}>WillItRain</Text>
            <Text style={styles.info}>Versi 1.0</Text>
            <Text style={styles.info}>Pre-Alpha Build</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
});

export default AboutScreen;
