import React from 'react';
import styled from 'styled-components';
import NavList from './NavList';

const Nav = () => {
  return (
    <NavSection>
      <NavList />
    </NavSection>
  );
};

const NavSection = styled.nav`
  padding: 0 15rem;
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Nav;
