import React, {useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import Card from '../../components/Card/Card';
import { StyledCardWrapper, StyledCardBody, StyledButtonWrapper } from "./Searched-styles";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/searchbar/SearchBar';
import { WeatherContext } from '../../WeatherContext';
import {Button} from '../../components/Button/Button';

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
              <StyledCardBody>
                <FaMapMarkerAlt />
                <div>{weather?.name}, {weather?.sys?.country}</div>
                <span>{Math.round(weather?.main?.temp)} °C</span>
              </StyledCardBody>
              <StyledButtonWrapper>
                <Button onClick={goHome}>
                  <AiOutlineHome />
                </Button>
              </StyledButtonWrapper>
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