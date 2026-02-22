import React from 'react'
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastDay from './ForecastDay';
import SearchBar from './SearchBar';

function WeatherPage() {
  return (
    <div>
      <SearchBar/>
      <CurrentWeatherCard/>
      <ForecastDay/>
    </div>
  )
}

export default WeatherPage
