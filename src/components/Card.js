import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <CardContainer>
      <WeaponInfo>
        <Top>
          <div className="top-right-tab"></div>
        </Top>
        <Bottom>
            <div className="bottom-left-tab"></div>
        </Bottom>
      </WeaponInfo>
    </CardContainer>
  );
};

const CardContainer = styled.section`
  width: 245px;
  height: 275px;
  margin: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeaponInfo = styled.div`
  width: 85%;
  height: 85%;
  background-color: #ffde40;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  position: relative;
  flex: 1 1 50rem;
  .top-right-tab {
    position: absolute;
    width: 8rem;
    border-top-right-radius: 5px;
    border-bottom: 8px solid #ffde40;
    border-left: 5px solid transparent;
    right: 0;
    top: -7px;
  }
  img {
    display: block;
    margin: auto;
    width: 150px;
    height: auto;
  }
`;

const Bottom = styled.div`
  position: relative;
  flex: 1 1 50rem;
  background: rgba(0, 0, 0, 0.1);
  .bottom-left-tab {
    position: absolute;
    width: 5rem;
    bottom: -7px;
    border-top: none;
    border-bottom: 8px solid #e6c625;
    border-right: 5px solid transparent;
    border-top-left-radius: 5px;
    transform: rotateX(180deg);
  }
`;

export default Card;
