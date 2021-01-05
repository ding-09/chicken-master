import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import Title from '../components/Title'

const AR = ({ weaponDataAR, title }) => {
  return (
    <section>
      {title && 
        <Title title={title}/>
      }
      <section className="weapon-container">
        {weaponDataAR &&
          weaponDataAR.map((weaponData, index) => (
            <Card weaponData={weaponData} key={index} />
          ))}
      </section>
    </section>
  );
};

export default AR;
