import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { 
  InputWrapper,
  Form
 } from './SearchBar-styles';

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();


  const onSubmit = ((e) => {
    e.preventDefault();
    navigate("/searched/" + input)
    setInput("")
  })
  return (
    <Form onSubmit={onSubmit}>
      <InputWrapper> 
        <input type="text" value={input} onChange={((e) => setInput(e.target.value))} />
        <FaSearch />
      </InputWrapper>
    </Form>
  )
}

export default SearchBar