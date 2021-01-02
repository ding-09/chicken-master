import React from 'react';
import styled from 'styled-components';
import searchIcon from '../images/search-icon.svg';

const Nav = () => {
  return (
    <Navbar>
      <ul>
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">AR</a>
        </li>
        <li>
          <a href="#">DMR</a>
        </li>
        <li>
          <a href="#">LMG</a>
        </li>

        <li>
          <a href="#">SMG</a>
        </li>
        <li>
          <a href="#">Shotguns</a>
        </li>
        <li>
          <a href="#">Snipers</a>
        </li>
      </ul>
      <Search>
        <img src={searchIcon} alt="search icon" />
        <input type="search" placeholder="Kar89k" />
      </Search>
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 6rem;
  ul {
    background: lightblue;
    display: flex;
    margin-right: 10rem;
  }
  li {
    list-style: none;
    background: #3f3f3f;
    text-align: center;
    padding: 0.4rem 0.9rem;
    margin-right: 1rem;
    border-radius: 5rem;
  }
  a {
    color: #ffffff;
    font-size: 0.9rem;
  }
`;

const Search = styled.div`
  flex-basis: 15rem;
  background: #3f3f3f;

  img {
    display: inline-block;
    padding: 0rem 0.5rem;
  }
  input {
    width: 70%;
    height: 2rem;
    border: none;
    outline: none;
    background: #3f3f3f;
  }
`;

export default Nav;
