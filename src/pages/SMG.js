import React from 'react';
import Card from '../components/Card';

const SMG = ({ weaponDataSMG }) => {
  return (
    <section className="weapon-container">
      {weaponDataSMG &&
        weaponDataSMG.map((weaponData, index) => (
          <Card weaponData={weaponData} key={index} />
        ))}
    </section>
  );
};

export default SMG;
