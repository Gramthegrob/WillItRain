import React from 'react';
import { View, Text } from 'react-native';

const WeatherDetailScreen = ({ route }) => {
  const { data } = route.params;

  return (
    <View>
      <Text>{data.location.name}</Text>
      <Text>Temperature: {data.current.temp_c}°C</Text>
      <Text>Condition: {data.current.condition.text}</Text>
      <Text>Wind Speed: {data.current.wind_kph} kph</Text>
    </View>
  );
};

export default WeatherDetailScreen;
