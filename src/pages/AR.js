import React from 'react';
import Card from '../components/Card';

const AR = ({ weaponDataAR }) => {
  return (
    <section className="weapon-container">
      {weaponDataAR.map((weaponData) => (
        <Card weaponData={weaponData} />
      ))}
    </section>
  );
};

export default AR;
