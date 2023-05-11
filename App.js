import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View} from "react-native";
import { IoIosCloudyNight } from "react-icons/io";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { BsFillSunFill } from "react-icons/bs";

import Header from "./componant/Header";
import A from "./componant/A";

export default function App() {
  const Temp = "20";
  const wind = "20";
  const haze = "haze";
  const mausam = "Thunderstorm  |";
  // const cdate =new Date().toDateString();
  const [Date, setDate] = useState("Mar 19 Sun  ");

  const [city, setCity] = useState("Asia/Kolkata");

  const [weather, setWeather] = useState(null);
  const [w, setW] = useState(null);
  const latitude = 28.65;
  const longitude = 77.23;
  const API_KEY = "YOUR_API_KEY";

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=1&current_weather=true&timezone=${city}`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((error) => console.log(error));
    }
  }, [city]);

  const handleSearch = () => {
    setWeather(null);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* <Header /> */}
      <ScrollView>
        <A />
        {/* <View style={styles.j}>
          <Text style={styles.temp}>{Temp} </Text>
          <Text style={styles.temp2}>&deg;C {haze}</Text>

         
        </View>
        <Text style={styles.date}>
          {Date} {Temp}&deg;C/{Temp}&deg;C
        </Text>
        <Text style={styles.wind}>Wind Speed : {wind} KMPH</Text> */}

        <View style={styles.scrollh}>
          {weather && (
            <ScrollView horizontal={true}>
              <Text style={{ color: "white", width: 100 }}>
                12:00AM<br></br>
                <IoIosCloudyNight />
                <br></br>
                {weather.hourly.temperature_2m[1]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                01:00AM<br></br>
                <IoIosCloudyNight />
                <br></br>
                {weather.hourly.temperature_2m[1]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                02:00AM<br></br>
                <IoIosCloudyNight />
                <br></br>
                {weather.hourly.temperature_2m[2]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                03:00AM<br></br>
                <IoIosCloudyNight />
                <br></br>
                {weather.hourly.temperature_2m[3]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                04:00AM<br></br>
                <IoIosCloudyNight />
                <br></br>
                {weather.hourly.temperature_2m[4]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                05:00AM<br></br>
                <IoIosCloudyNight />
                <br></br>
                {weather.hourly.temperature_2m[6]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                06:00AM<br></br>
                <WiSunrise />
                <br></br>
                {weather.hourly.temperature_2m[7]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                07:00AM<br></br>
                <WiSunrise />
                <br></br>
                {weather.hourly.temperature_2m[8]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                08:00AM<br></br>
                <WiSunrise />
                <br></br>
                {weather.hourly.temperature_2m[9]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                09:00AM<br></br>
                <WiSunrise />
                <br></br>
                {weather.hourly.temperature_2m[10]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                10:00AM<br></br>
                <WiSunrise />
                <br></br>
                {weather.hourly.temperature_2m[11]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                11:00AM<br></br>
                <BsFillSunFill />
                <br></br>
                {weather.hourly.temperature_2m[12]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                12:00PM<br></br>
                <BsFillSunFill />
                <br></br>
                {weather.hourly.temperature_2m[13]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                01:00PM<br></br>
                <BsFillSunFill />
                <br></br>
                {weather.hourly.temperature_2m[14]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                02:00PM<br></br>
                <BsFillSunFill />
                <br></br>
                {weather.hourly.temperature_2m[15]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                03:00PM<br></br>
                <BsFillSunFill />
                <br></br>
                {weather.hourly.temperature_2m[16]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                04:00PM<br></br>
                <WiSunset />
                <br></br>
                {weather.hourly.temperature_2m[17]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                05:00PM<br></br>
                <WiSunset />
                <br></br>
                {weather.hourly.temperature_2m[18]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                06:00PM<br></br>
                <WiSunset />
                <br></br>
                {weather.hourly.temperature_2m[19]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                07:00PM<br></br>
                <IoIosCloudyNight />
                <br></br>
                {weather.hourly.temperature_2m[20]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                08:00PM<br></br>
                <IoIosCloudyNight />
                <br></br>
                {weather.hourly.temperature_2m[21]}
              </Text>
              <Text style={{ color: "white", width: 100 }}>
                09:00PM<br></br>
                <IoIosCloudyNight />
                <br></br>
                {weather.hourly.temperature_2m[22]}
              </Text>
            </ScrollView>
          )}
        
        </View>
        <View>
            {weather && (
           <View style={styles.containerg}>
               <View style={styles.shadowBox} ><h2>Wind Speed</h2><h2>{weather.current_weather.windspeed}</h2></View>
               <View style={styles.shadowBox} ><h2>Wind Direction</h2><h2>{weather.current_weather.winddirection}</h2></View>
               <View style={styles.shadowBox} ><h2>Elevation</h2><h2>{weather.elevation}</h2></View>
               <View style={styles.shadowBox} ><h5>latitude/longitude</h5><h4>{weather.latitude}/{weather.longitude}</h4></View>
               
            </View>
            )}
          </View>
        {/* <View style={styles.forcastdaysview}>
          <Text style={styles.forcastdays}>
            Today<Text style={{ marginLeft: 120 }}>{mausam}</Text>
            <Text>
              {" "}
              {Temp}&deg;C/{Temp}&deg;C
            </Text>
          </Text>
          <Text style={styles.forcastdays}>
            Today<Text style={{ marginLeft: 120 }}>{mausam}</Text>
            <Text>
              {" "}
              {Temp}&deg;C/{Temp}&deg;C
            </Text>
          </Text>
          <Text style={styles.forcastdays}>
            Today<Text style={{ marginLeft: 120 }}>{mausam}</Text>
            <Text>
              {" "}
              {Temp}&deg;C/{Temp}&deg;C
            </Text>
          </Text>
          <Text style={styles.forcastdays}>
            Today<Text style={{ marginLeft: 120 }}>{mausam}</Text>
            <Text>
              {" "}
              {Temp}&deg;C/{Temp}&deg;C
            </Text>
          </Text>
          <Text style={styles.forcastdays}>
            Today<Text style={{ marginLeft: 120 }}>{mausam}</Text>
            <Text>
              {" "}
              {Temp}&deg;C/{Temp}&deg;C
            </Text>
          </Text>
          <Text style={styles.forcastdays}>
            Today<Text style={{ marginLeft: 120 }}>{mausam}</Text>
            <Text>
              {" "}
              {Temp}&deg;C/{Temp}&deg;C
            </Text>
          </Text>
        </View> */}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#849d98",
 
    
    paddingTop: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    margin: 40,
    border: "none",
    // textAlign: "center",
  },
  temp: {
    fontSize: 100,
    color: "white",

    marginLeft: "20px",
  },
  temp2: {
    fontSize: 30,
    color: "white",
    marginTop: "20px",
    marginRight: "120px",
  },
  wind: {
    fontSize: 12,
    color: "white",
    marginLeft: "20px",
    marginRight: "120px",
  },
  j: {
    flexDirection: "row",
  },
  date: {
    marginLeft: 20,
    color: "white",
  },
  scrollh: {
    fontSize:30,
    fontWeight:"bold",
    color:"#fff",
    marginTop: 100,
    padding:10,
    marginBottom: 100,
    
  
  
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 2,
    },
    textAlign: "center",
    textShadowColor: "#f5eaea",
  },
  forcastdays: {
    color: "white",
    padding: 10,
  },
  forcastdaysview: {
    marginTop: 25,
    height: 100,
  },
  containerg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowBox: {
    color: "white",
    width: 200,
    height: 140,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    textAlign:"center",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    marginTop: 10,

  },
});
