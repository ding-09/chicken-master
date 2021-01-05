import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  return (
    <>
      <SectionHeader>
        {title}
        <Tab></Tab>
      </SectionHeader>
    </>
  );
};

const SectionHeader = styled.h2`
  position: relative;
  font-size: 3rem;
  margin-left: 15rem;
  margin-top: 2rem;
  padding-right: 3rem;
  color: #de8d00;
  border-bottom: 2px solid #de8d00;
  display: inline-block;
  line-height: 1.3;
`;

const Tab = styled.div`
  position: absolute;
  width: 40%;
  bottom: -5px;
  border-top: none;
  border-bottom: 3px solid #de8d00;
  border-right: 5px solid transparent;
  transform: rotateX(180deg);
`;

export default Title;
