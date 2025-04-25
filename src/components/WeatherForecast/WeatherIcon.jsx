import react from 'react'

function WeatherIcon({ img, alt }) {
    return (
    <img 
       src={img} 
       alt={alt}
       className="weather-icon"
       width="50"
    height="50"
   />
  )
}

export default WeatherIcon;