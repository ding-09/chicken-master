import React from 'react';
import Card from '../components/Card';

const DMR = ({ weaponDataDMR }) => {
  return (
    <section className="weapon-container">
      {weaponDataDMR.map((weaponData, index) => (
        <Card weaponData={weaponData} key={index} />
      ))}
    </section>
  );
};

export default DMR;
