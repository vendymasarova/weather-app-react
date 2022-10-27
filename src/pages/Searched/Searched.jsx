import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import Card from '../../components/Card/Card';
import { StyledCardWrapper } from "./Searched-styles";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineErrorOutline } from 'react-icons/md';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/searchbar/SearchBar';
import { WeatherContext } from '../../WeatherContext';

const Searched = () => {
  const navigate = useNavigate();
  const { weather, isLoaded, getForecast } = useContext(WeatherContext)
  const params = useParams();

  const goHome = () => {
    navigate("/location/" + params.search)
  }

  useEffect(() => {
    getForecast(params.search)
  }, [params.search])

  console.log(isLoaded)

  return (
    <>
      <SearchBar />
       {isLoaded ? (
        <StyledCardWrapper>
        {
          weather.name ? (
            <Card onClick={goHome}>
              <FaMapMarkerAlt />
              <div>{weather?.name}, {weather?.sys?.country}</div>
              <span>{Math.round(weather?.main?.temp)} °C</span>
            </Card>
          ) : (
            <Card>
              <MdOutlineErrorOutline color="red" />
              <div>{weather.message}</div>
            </Card>
          )
        }
        </StyledCardWrapper>
       ) : (
        <Loader />
       )}
    </>
  )
}

export default Searched