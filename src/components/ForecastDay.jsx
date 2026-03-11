import React from 'react'

function ForecastDay({foreCast}) {
  console.log(foreCast)
  return (
    <div className='container border'>
      <p>{foreCast.dt_txt}</p>
      <p>max temp: {foreCast.main.temp_max}°C</p>
      <p>min temp: {foreCast.main.temp_min}°C</p>
    </div>
  )
}

export default ForecastDay
