import React, {useState, createContext} from 'react';

export const WeatherContext = createContext();

 export function WeatherProvider({children}) {
  const [weather, setWeather] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

   const apiBase = "https://api.openweathermap.org/data/2.5/";
   const apiKey = "7e899a6bac8e971b5d493c29dfe5b62c"

   const getForecast = async (query) => {
     await fetch(`${apiBase}weather?q=${query}&appid=${apiKey}&units=metric`)
       .then((data) => data.json())
       .then((res) => {
         setWeather(res)
       })
       .catch((err) => console.log(err))
     setIsLoaded(true)
   }

  return (
    <WeatherContext.Provider value={{ weather, isLoaded, getForecast  }}>{children}</WeatherContext.Provider>
  )
}

