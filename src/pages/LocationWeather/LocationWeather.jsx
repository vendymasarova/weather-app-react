import React, {useContext, useEffect} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import {
  Container,
  StyledArrow,
  StyledBody
} from "./LocationWeather-styles"
import { WeatherContext } from '../../WeatherContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { weather, getForecast } = useContext(WeatherContext)
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getForecast(params.search)
  }, [params.search])

  const goBack = () => {
    navigate("/" + params.search)
  }

  console.log(weather)
  

  return (
    <>
    <StyledArrow onClick={goBack}>
        <AiOutlineArrowLeft />
    </StyledArrow>
    <Container>
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
    </Container>
    </>
  )
}



export default Home