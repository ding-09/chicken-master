import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavList = () => {
  return (
    <List>
      <li>
        <NavLink exact to="/">
          All
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/ar">
          Assault Rifles
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/dmr">
          DMR
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/smg">
          SMG
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/lmg">
          LMG
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/snipers">
          Snipers
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/shotguns">
          Shotguns
        </NavLink>
      </li>
    </List>
  );
};

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-basis: 55rem;
  li {
    margin-right: 1rem;
    background: #3f3f3f;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 10rem;
    a {
      display: block;
      padding: 0.3rem 1.2rem;
      width: 100%;
      border-radius: 10rem;
    }
  }
  .active {
    background: #ffde40;
    color: #000000;
  }
`;

export default NavList;
