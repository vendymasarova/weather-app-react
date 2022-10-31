import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import {
  InputWrapper,
  Form,
 } from './SearchBar-styles';

interface Props {
  onClick: () => void;
  target?: HTMLInputElement;
  item?: object,
  city?: object,
  name?: string,
  id?: number,
  country?: string,
}

interface ObjecrProps {
  item?: object,
  city?: object,
  name?: string,
  id?: number,
  country?: string,
}

const SearchBar = ({item}: ObjecrProps) => {
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();
  const [citties, setCitties] = useState<any>([]);

  const onSubmit = ((e: React.FormEvent<HTMLFormElement>) => {
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
      setCitties(() => data.map((city: object) => city))
    })
  }, [])

  const suggestions = citties.filter((city: { name: string; }) => city.name.toLowerCase().startsWith(input))
  return (
    <Form onSubmit={onSubmit}>
      <InputWrapper>
        <input type="text" list='city' value={input} onChange={((e) => setInput(e.target.value))} />
        <FaSearch />
      </InputWrapper>
        {input && (
          <datalist id='city'>
            {suggestions.slice(0, 5).map((item: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; country: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
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