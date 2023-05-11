import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Feather } from '@expo/vector-icons';

const WeatherApp = () => {
  const [city, setCity] = useState('Asia/Kolkata');
  const [weather, setWeather] = useState(null);
  const [w, setW] = useState(null);
  const latitude=28.65;
  const longitude=77.23;
  const API_KEY = 'YOUR_API_KEY';

  useEffect(() => {
    if (city) {
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=1&current_weather=true&timezone=${city}`)
        .then(response => response.json())
        .then(data => setWeather(data))
        .catch(error => console.log(error));
    }
  }, [city]);
  

  const handleSearch = () => {
    setWeather(null);
  };
  var x=weather;
// setW(weather.hourly[0])
//   console.log(weather.current_weather.temperature)

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../')}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter City"
            placeholderTextColor="#fff"
            // onChangeText={text => setCity(text)}
            value={city}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Feather name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        {weather && (
          <View style={styles.weatherContainer}>
            <Text style={styles.city}>{weather.timezone}</Text>
            <Text style={styles.temperature}>{Math.round(weather.current_weather.temperature)}°C</Text>
            <Text style={styles.description}>{weather.current_weather.description}</Text>
            <Text style={styles.description}>{}</Text>
          </View>
          
        )}
 
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:10 ,
  },
  imageBackground: {
    flex: 10,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(25, 25, 25, 0.5)',
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchButton: {
    marginLeft: 10,
  },
  weatherContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    padding: 20,
  },
  city: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  description: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  scrollh: {

    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    height:100
  },
});

export default WeatherApp;
