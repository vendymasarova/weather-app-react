import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Card from '../../components/Card/Card';
import { StyledWrapper } from "./Searched-styles";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineErrorOutline } from 'react-icons/md';


const Searched = () => {
  const [results, setResults] = useState([]);
  const [weather, setWeather] = useState();

  const params = useParams();

  const apiBase = "https://api.openweathermap.org/data/2.5/";
  const apiKey = "7e899a6bac8e971b5d493c29dfe5b62c"

  const getForecast = async (query) => {
    await fetch(`${apiBase}weather?q=${query}&appid=${apiKey}&units=metric`)
      .then((data) => data.json())
      .then((res) => {
        setResults(res)
        setWeather(res.weather[0])
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getForecast(params.search)
  }, [params.search])

  console.log(results)
  return (
    <StyledWrapper>
       
        { results?.name ? (
          <Card>
            <FaMapMarkerAlt />
            <div>{results?.name}, <span>{results?.sys?.country}</span></div>
            <div>{weather?.id}</div>
          </Card>
        ) : (
          <Card>
            <MdOutlineErrorOutline color="red"/>
            <div>{results.message}</div>
          </Card>
        )}
        
    </StyledWrapper>
  )
}

export default Searched