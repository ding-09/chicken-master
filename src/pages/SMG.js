import React from 'react';
import Card from '../components/Card';
import Title from '../components/Title';

const SMG = ({ weaponDataSMG, title }) => {
  return (
    <section>
      {title && <Title title={title} />}
      <section className="weapon-container">
        {weaponDataSMG &&
          weaponDataSMG.map((weaponData, index) => (
            <Card weaponData={weaponData} key={index} />
          ))}
      </section>
    </section>
  );
};

export default SMG;
