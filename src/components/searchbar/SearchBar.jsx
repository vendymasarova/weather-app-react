import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import {
  InputWrapper,
  Form,
 } from './SearchBar-styles';

const SearchBar = ({item}) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [citties, setCitties] = useState([]);

  const onSubmit = ((e) => {
    e.preventDefault();
    navigate("/" + input)
    setInput("")
  })

  useEffect(() => {
    fetch('./city.list.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((blob) => blob.json())
    .then((data) => {
      setCitties(() => data.map((city) => city))
    })
  }, [])

  const suggestions = citties.filter((city) => city.name.toLowerCase().startsWith(input))
  return (
    <Form onSubmit={onSubmit}>
      <InputWrapper>
        <input type="text" list='city' value={input} onChange={((e) => setInput(e.target.value))} />
        <FaSearch />
      </InputWrapper>
        {input && (
          <datalist id='city'>
            {suggestions.slice(0, 5).map(item => {
              return (
                <option key={item.id}>{item.name}, {item.country}</option>
              )
            })}
          </datalist>
        )}
    </Form>
  )
}

export default SearchBar