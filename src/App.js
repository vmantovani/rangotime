import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import { BrowserRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiForkKnifeSpoon } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BackgroundYellow>
          <Nav>
            <div>
              <Logo to={'/'}>RangoTime</Logo>
              <GiForkKnifeSpoon />
            </div>
            <Search />
          </Nav>
        </BackgroundYellow>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  color: #00846a;
  font-size: 4rem;
  font-weight: 600;
  font-family: 'Italianno', cursive;
  margin-right: 1rem;
`;

const Nav = styled.nav`
  padding: 1rem 0rem;
  display: flex;
  color: #00846a;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const BackgroundYellow = styled.div`
  background-color: #ffc244;
  padding: 2rem 5rem;
  width: 100%;
`;

export default App;
