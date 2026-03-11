import React from 'react'

function CurrentWeatherCard({data}) {

  if (!data) return <div className='container mt-4'>Loading weather data...</div>;
  
  // Debug: Check icon data
  // console.log("Weather data:", data);
  // console.log("Icon code:", data.weather[0]?.icon);
  
  return (
    <div className='bg-info p-4 container justify-content-cente mt-4'>
     <h2>Current Weather in {data.name}</h2>
     <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather Icon" width='50px'onError={(e) => {e.target.style.border = '1px solid red'}} />
       <p>Tempareture: {data.main.temp}°C</p>
       <p>Feels like : {data.main.feels_like}°C</p>
       <p>Humidity : {data.main.humidity}%</p>
       <p>Wind speed : {data.wind.speed}m/s</p>
    </div>
  )
}

export default CurrentWeatherCard
