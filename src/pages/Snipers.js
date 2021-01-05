import React from 'react';
import Card from '../components/Card';

const Snipers = ({ weaponDataSnipers }) => {
  return (
    <section className="weapon-container">
      {weaponDataSnipers.map((weaponData, index) => (
        <Card weaponData={weaponData} key={index} />
      ))}
    </section>
  );
};

export default Snipers;
