import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Card from '../../components/Card/Card';
import { StyledCardWrapper } from "./Searched-styles";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineErrorOutline } from 'react-icons/md';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/searchbar/SearchBar';

const Searched = () => {
  const [results, setResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();


  const params = useParams();

  const apiBase = "https://api.openweathermap.org/data/2.5/";
  const apiKey = "7e899a6bac8e971b5d493c29dfe5b62c"

  const getForecast = async (query) => {
    await fetch(`${apiBase}weather?q=${query}&appid=${apiKey}&units=metric`)
      .then((data) => data.json())
      .then((res) => {
        setResults(res)
      })
      .catch((err) => console.log(err))
    setIsLoaded(true)
  }

  const goHome = () => {
    navigate("/location/")
  }

  useEffect(() => {
    getForecast(params.search)
  }, [params.search])

  return (
    <>
      <SearchBar />
       {isLoaded ? (
        <StyledCardWrapper>
        {
          results.name ? (
            <Card onClick={goHome}>
              <FaMapMarkerAlt />
              <div>{results?.name}, {results?.sys?.country}</div>
              <span>{Math.round(results?.main?.temp)} °C</span>
            </Card>
          ) : (
            <Card>
              <MdOutlineErrorOutline color="red" />
              <div>{results.message}</div>
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