import React, {Component} from 'react';
import { StyleSheet, Text, View , StatusBar, ImageBackground, ActivityIndicator} from 'react-native';
import Weather from "./Weather";
import { LinearGrandient}  from 'expo';

const API_KEY = "064195bc12453a561b2eba538236112a";


export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature:null,
    name:null,
    city:null
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          //isLoaded:true
        })
        this._getWeather(position.coords.latitude, position.coords.longitude);
        console.log("componentDidMount: here is ??? ==>"+ position.coords.latitude + "/" + position.coords.longitude );
      },
      error =>{
         this.setState({
          error:error
         }
         )
      }
    );
  }

  render() {
    console.log("---------App.js render Start");
    const { isLoaded, error, temperature, name, city } = this.state;
    console.log("---------App.js name="+name);
    console.log("---------App.js city="+city);
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {
          isLoaded ? <Weather weatherName={name} temp={Math.floor(temperature -273.15)} city={city}/>: <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting The Rozeus Wallet</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        }
      </View>     
    );
  }

  _getWeather = (lat, lon) => {
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+API_KEY
    ).then(response => response.json())
    .then(json =>{
        console.log("_getWeather Start");
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true,
          city: json.sys.country
        })
        console.log("_getWeather End: temperature:"+this.state.temperature);

    }).catch(console.error);
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "flex-start",
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: "wrap"
  },
  errorText:{
    color:"red",
    fontSize: 20,
    backgroundColor:'transparent',
    marginBottom: 40
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: 'transparent'
  },
  temp: {
    fontSize: 48,
    backgroundColor: 'transparent',
    color: "white",
    margin: 10
  },
  lower: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: 'transparent'
  },
  loading: {
    flex:1,
    backgroundColor:"#FDF6AA",
    justifyContent:"flex-end",
    paddingLeft:25
  },
  loadingText:{
     fontSize: 30,
     marginBottom: 150
  }
});
