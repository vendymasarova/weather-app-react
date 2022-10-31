import React, {useContext, useEffect, useState} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import {
  StyledBody,
  StyledButtonWrapper,
  StyledGrid
} from "./LocationWeather-styles"
import { WeatherContext } from '../../WeatherContext';
import { useNavigate } from 'react-router-dom';
import {Button} from '../../components/Button/Button';

const Home = () => {
  const { weather, setWeather, getForecast } = useContext(WeatherContext)
  const [favouriteLocations, setFavouriteLocations] = useState(weather)
  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    

  }, [weather])

  // useEffect(() => {
    // if (localStorage.getItem("array") == null) {
      localStorage.setItem("array", '[]')
      const newData = weather
    // }
    let oldData = JSON.parse(localStorage.getItem("array"))

    oldData.push(weather)
    console.log(oldData)
    localStorage.setItem("array", JSON.stringify(oldData))
    let output = JSON.parse(localStorage.getItem("array"))
    output = [...oldData, weather]
    localStorage.setItem("array", JSON.stringify(output))
  console.log(weatherData)
    const weatherData = JSON.parse(localStorage.getItem("array"))


  // }, [])

  useEffect(() => {
    getForecast(params.search)
  }, [params.search])

  const goBack = () => {
    navigate("/" + params.search)
  }
  

  return (
    <>
    <StyledButtonWrapper>
      <Button onClick={goBack}>
        <AiOutlineArrowLeft />
      </Button>
    </StyledButtonWrapper>
    <StyledGrid>
        {weatherData?.map((item) => {
          console.log(item)
          return (
            <Card>
              <div>
                <p>{item.name}</p>
                {/* <p>{item.description}</p> */}
              </div>
            </Card>
          )
        })}
      <Card>
        <StyledBody>
            <div>
              <p>{weather?.name}</p>
              <p>{weather?.weather[0].main}</p>
              <p>{weather?.weather[0].description}</p>
            </div>
            <div>
              <p>{Math.round(weather.main.temp)}</p>
              {weather.main.temp_min !== weather.main.temp_max && (
                <p>{Math.round(weather.main.temp_min)}, {Math.round(weather.main.temp_max)} </p>
              )}
              <img src={`https://openweathermap.org/img/w/${weather?.weather[0].icon}.png`} alt={weather?.weather[0].icon} />
            </div>
        </StyledBody>
      </Card>
      <Card>
        <StyledBody>
            <div>
              <p>{weather?.name}</p>
              <p>{weather?.weather[0].main}</p>
              <p>{weather?.weather[0].description}</p>
            </div>
            <div>
              <p>{Math.round(weather.main.temp)}</p>
              {weather.main.temp_min !== weather.main.temp_max && (
                <p>{Math.round(weather.main.temp_min)}, {Math.round(weather.main.temp_max)} </p>
              )}
              <img src={`https://openweathermap.org/img/w/${weather?.weather[0].icon}.png`} alt={weather?.weather[0].icon} />
            </div>
        </StyledBody>
      </Card>
    </StyledGrid>
    </>
  )
}



export default Home