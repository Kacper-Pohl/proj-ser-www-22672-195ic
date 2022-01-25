import React from 'react';
import axios from 'axios';
import '../Style.css'
import CitySearch from './CitySearch';
import WeatherCard from './WeatherCard'

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function bgColor(){
    document.body.style.backgroundImage = 'linear-gradient(to left, ' + randomColors() + ', ' + randomColors() + ')';
}

class App extends React.Component{

    state = {weatherResult: null}

    onSearchSubmit = async (searchInputValue) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=ca261c971d5638db9d4d6cbccc1f093d`)
        this.setState({weatherResult: response.data})
     }

    render() {
        return(
            <div onLoad={() => bgColor()} >
                <a href="https://openweathermap.org"><img width={108} height={46} src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"/></a>
                <div  className="container my-5">
                    <h1 className="text-center title">Weather in</h1>
                    <a onClick={() => bgColor()}><CitySearch onSearchSubmit={this.onSearchSubmit}/></a>
                    {this.state.weatherResult ? <WeatherCard weatherResult={this.state.weatherResult}/> : <div></div>}
                </div>
            </div>
        )
    }

}

export default App;