import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = React.useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault(); //para o enter não recarregar a pagina
    navigate('/searched/' + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  div {
    position: relative;
    width: 100%;
  }

  input {
    font-size: 1.5rem;
    padding: 1rem 3rem;
    outline: none;
    border: 2px solid #00846a;
    border-radius: 1rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    width: 1rem;
    height: 4rem;
    transform: translate(100%, -50%);
    color: #00846a;
  }
`;

export default Search;
