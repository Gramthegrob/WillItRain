import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQGdB-vpDOUSYg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730345074295?e=1737590400&v=beta&t=ipBv287ZIIpfDxK8z6oj9ItM86myIJQ3bXUH93QSNEs' }}
            />
            <Text style={styles.name}>Bagaskara Dipowicaksono HP</Text>
            <Text style={styles.info}>21120122140119</Text>
            <Text style={styles.info}>Teknik Komputer 2022</Text>
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

export default ProfileScreen;