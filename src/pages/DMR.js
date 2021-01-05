import React from 'react';
import Card from '../components/Card';
import Title from '../components/Title';

const DMR = ({ weaponDataDMR, title }) => {
  return (
    <section>
      {title && <Title title={title} />}
      <section className="weapon-container">
        {weaponDataDMR &&
          weaponDataDMR.map((weaponData, index) => (
            <Card weaponData={weaponData} key={index} />
          ))}
      </section>
    </section>
  );
};

export default DMR;
