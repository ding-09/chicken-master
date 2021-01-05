import React from 'react';
import styled from 'styled-components';
import logoImg from '../images/PUBG_Logo_White.png';

const Header = () => {
  return (
    <HeaderSection>
      <img src={logoImg} alt="logo of PUBG" />
      <h1>Weapon Stats Breakdown</h1>
    </HeaderSection>
  );
};

const HeaderSection = styled.header`
  padding: 5rem 15rem;
  img {
    display: inline-block;
    margin-right: 1rem;
    width: 20rem;
  }
  h1 {
    color: #ffde40;
    display: inline;
    font-weight: bold;
  }
`;

export default Header;
