import React from 'react';
import Card from '../components/Card';

const Shotguns = ({ weaponDataShotguns }) => {
  return (
    <section className="weapon-container">
      {weaponDataShotguns.map((weaponData, index) => (
        <Card weaponData={weaponData} key={index} />
      ))}
    </section>
  );
};

export default Shotguns;
