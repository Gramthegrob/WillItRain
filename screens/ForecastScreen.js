import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const ForecastScreen = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    fetchForecastData();
  }, []);

  const fetchForecastData = async () => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=Jakarta&days=5`);
      setForecastData(response.data.forecast.forecastday);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.date}</Text>
      <Text>Temperature: {item.day.avgtemp_c}°C</Text>
      <Text>Condition: {item.day.condition.text}</Text>
    </View>
  );

  return (
    <View>
      <Text>5-Day Forecast</Text>
      <FlatList
        data={forecastData}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
      />
    </View>
  );
};

export default ForecastScreen;
