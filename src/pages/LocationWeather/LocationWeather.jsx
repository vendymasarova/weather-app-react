import React, {useContext, useEffect} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import {
  Container,
  StyledArrow
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
    navigate("/")
  }

  console.log(weather)
  //dodělat ikonu

  return (
    <>
    <StyledArrow onClick={goBack}>
        <AiOutlineArrowLeft />
    </StyledArrow>
    <Container>
      <Card>
        <div>
          <p>{weather?.name}</p>
          <p>{weather?.weather[0].main}</p>
          <p>{weather?.weather[0].description}</p>
        </div>
        <div>
          <p>{Math.round(weather.main.temp)}</p>
          <p>{weather.main.temp_min}, {weather.main.temp_max} </p>
        </div>
      </Card>
    </Container>
    </>
  )
}



export default Home