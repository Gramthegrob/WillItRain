import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=a22c29696b304b839d985332241111&q=Jakarta`);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('WeatherDetail', { data: item })}>
      <Text>{item.location.name}: {item.current.temp_c}°C</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>Weather List</Text>
      <FlatList
        data={weatherData}
        renderItem={renderItem}
        keyExtractor={(item) => item.location.name}
      />
    </View>
  );
};

export default HomeScreen;
