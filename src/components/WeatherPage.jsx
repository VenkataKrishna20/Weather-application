import React,{useState,useEffect} from 'react'
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastDay from './ForecastDay';
import SearchBar from './SearchBar';

function WeatherPage() {

    const apiKey = "5dcf25823e21633a6604ec88b450015a";
    //States
    const [city ,setCity] = useState("Chennai");
    const [currentweather, setCurrentweather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);
    const [isloading, setIsloading] = useState(false);  

    const handleSearch=(newcity)=>{
        setCity(newcity);
        setCurrentweather(null);
        setForecast(null);
        setError(null);
    }

    //get data from WeatherAPI
    const fetchDataByCity = async()=>{
        setIsloading(true);
        setError(null);
        try{
            //fetch current weather and forecast data.!
            const currentRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);

            const currentW = await currentRes.json();
            const forecastDay = await forecastRes.json();
            console.log(currentW);
            console.log(forecastDay);
            setCurrentweather(currentW);
            setForecast(forecastDay);            

        }catch(err){
            setError("Failed to fetch the data");
            setCurrentweather(null);
            setForecast(null);
        }finally{
            setIsloading(false);
        }
    }
useEffect(()=>{
    fetchDataByCity()
},[city])

  return (
    <div>
      <SearchBar />
      <CurrentWeatherCard data={currentweather}/>   
      <ForecastDay/>
    </div>
  )
}

export default WeatherPage
