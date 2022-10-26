import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Card from '../../components/Card/Card';
import { StyledWrapper } from "./Searched-styles";
import { FaMapMarkerAlt } from 'react-icons/fa';


const Searched = () => {
  const [results, setResults] = useState([]);

  const params = useParams();

  const apiBase = "https://api.openweathermap.org/data/2.5/";
  const apiKey = "7e899a6bac8e971b5d493c29dfe5b62c"

  const getForecast = async (query) => {
    await fetch(`${apiBase}weather?q=${query}&appid=${apiKey}&units=metric`)
      .then((data) => data.json())
      .then((res) => {
        setResults(res)
      })
  }

  useEffect(() => {
    getForecast(params.search)
  }, [params.search])

  console.log(results)
  return (
    <StyledWrapper>
      
        {console.log(results)}
        {/* {results?.map((item) => { */}
            <Card>
              <FaMapMarkerAlt />
              <div>{results.name}</div>
              {/* <img src={`https://openweathermap.org/img/w/${results.weather[0].icon}.png`} alt="" /> */}
            </Card>
          {/* ) */}
        {/* }) */}
        {/* } */}
    </StyledWrapper>
  )
}

export default Searched