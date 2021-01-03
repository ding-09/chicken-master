import React from 'react';
import styled from 'styled-components';

const NavList = () => {
  return (
    <List>
      <li>All</li>
      <li>Assault Rifles</li>
      <li>DMR</li>
      <li>SMG</li>
      <li>LMG</li>
      <li>Snipers</li>
      <li>Shotguns</li>
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
    padding: 0.3rem 1.2rem;
    min-height: 2.5rem;
    width: auto;
  }
`;

export default NavList;
