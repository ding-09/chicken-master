import React from 'react';
import styled from 'styled-components';

const Card = ({ weaponData }) => {
  return (
    <CardContainer>
      <WeaponInfo>
        <Top>
          <img src={weaponData.img} alt={weaponData.name} />
          <div className="top-right-tab"></div>
        </Top>
        <Bottom>
          <div className="bottom-left-tab"></div>
          <h2>{weaponData.name}</h2>
          <WeaponStats>
            <StatsGroup>
              <p>Base</p>
              <p className="data">{weaponData.base_dmg}</p>
            </StatsGroup>
            <StatsGroup>
              <p>Mag</p>
              <p className="data">{weaponData.mag}</p>
            </StatsGroup>
            <StatsGroup>
              <p>Fire Rate</p>
              <p className="data">{weaponData.rate_of_fire}</p>
            </StatsGroup>
            <StatsGroup>
              <p>Stability</p>
              <p className="data">{weaponData.stability}</p>
            </StatsGroup>
            <StatsGroup>
              <p>Range</p>
              <p className="data">{weaponData.range}</p>
            </StatsGroup>
          </WeaponStats>
        </Bottom>
      </WeaponInfo>
    </CardContainer>
  );
};

const CardContainer = styled.article`
  flex-basis: 23rem;
  height: 28rem;
  margin-right: 3rem;
  margin-bottom: 5rem;
`;

const WeaponInfo = styled.div`
  width: 100%;
  height: 100%;
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
  h2 {
    font-size: 2rem;
    padding-top: 0.8rem;
    padding-left: 2rem;
  }
`;

const WeaponStats = styled.div`
  padding: 0.8rem 2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StatsGroup = styled.div`
  flex-basis: 45%;
  margin-bottom: 0.5rem;
  p {
    font-size: 1.4rem;
    display: inline-block;
  }
  .data {
    font-weight: bold;
    float: right;
  }
`;

export default Card;
