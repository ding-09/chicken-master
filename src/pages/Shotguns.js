import React from 'react';
import Card from '../components/Card';
import Title from '../components/Title';

const Shotguns = ({ weaponDataShotguns, title }) => {
  return (
    <section>
      {title && <Title title={title} />}
      <section className="weapon-container">
        {weaponDataShotguns &&
          weaponDataShotguns.map((weaponData, index) => (
            <Card weaponData={weaponData} key={index} />
          ))}
      </section>
    </section>
  );
};

export default Shotguns;
