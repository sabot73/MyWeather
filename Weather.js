import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar,ImageBackground, ActivityIndicator} from 'react-native';
import { LinearGradient}  from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from "prop-types";
 

// export default class Weather extends Component{
//     render() {
//         return (
//             <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//             <View style={styles.upper}>
//                 <Ionicons color="white" size={144} name="ios-rainy"></Ionicons>
//                 <Text style={styles.temp}>35°</Text>
//             </View>
//             <View style={styles.lower}>
//                 <Text style={styles.title}>Raining like a MF</Text>
//                 <Text style={styles.subtitle}>For more info look outside</Text>
//             </View>
//            </LinearGradient>
//         );
//     }
// }

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "Raining like God's blessing",
        subbtitle: "For more info look outside",
        icon: "ios-rainy"
    },
    Sunny: {
        colors:["#FEF253", "#FF7300"],
        title: "Sunny like Your smile",
        subbtitle: "Go out!!",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors:["#00ECBBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subbtitle: "Actually, outside of the house",
        icon: "weather-lightning"
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        title: "Clouds",
        subbtitle: "I Know, boring",
        icon: "weather-cloudy"
    },
    Snow: {
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Snowing day !! Great",
        subbtitle: "Do you want to build a snowman?",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subbtitle: "rain in very small, light drops  ",
        icon: "weather-hail"
    },
    Haze: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subbtitle: "Fogy!!, Be careful driving  ",
        icon: "weather-fog"
    },
    MIST: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Mist",
        subbtitle: "Misty!!, Be careful driving  ",
        icon: "weather-fog"
    }

}

function Weather({weatherName, temp, city}){
    console.log("Weather:  weathername:"+weatherName)
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}></MaterialCommunityIcons>
                <Text style={styles.temp}> {temp}° </Text>
                <Text style={styles.city}> {city} </Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subbtitle}</Text>
            </View>
        </LinearGradient>
    );
  }

  Weather.propTypes = {
      temp: PropTypes.number.isRequired
  }

export default Weather;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    upper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: "center",
      backgroundColor: 'transparent',
      marginTop: 80,
    },
    temp: {
        fontSize: 48,
        backgroundColor: 'transparent',
        color: "white",
        marginTop: 10
    },
    city: {
        fontSize: 30,
        backgroundColor: 'transparent',
        color: "white",
        margin: 10,
        marginTop: 80
      },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: "flex-end",
        paddingLeft: 25,
        marginBottom: 80,
      },
      title: {
          fontSize: 38,
          backgroundColor: "transparent",
          color: "white",
          marginBottom: 10,
          fontWeight: "300"
      },
      subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
      }
  
  });
