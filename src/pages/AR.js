import React from 'react';
import Card from '../components/Card';

const AR = ({ weaponDataAR }) => {
  return (
    <section className="weapon-container">
      {weaponDataAR.map((weaponData, index) => (
        <Card weaponData={weaponData} key={index}/>
      ))}
    </section>
  );
};

export default AR;
