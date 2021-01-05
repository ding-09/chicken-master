import React from 'react';
import Card from '../components/Card';
import Title from '../components/Title'

const LMG = ({ weaponDataLMG, title }) => {
  return (
    <section>
      {title && <Title title={title} />}
      <section className="weapon-container">
        {weaponDataLMG &&
          weaponDataLMG.map((weaponData, index) => (
            <Card weaponData={weaponData} key={index} />
          ))}
      </section>
    </section>
  );
};

export default LMG;
