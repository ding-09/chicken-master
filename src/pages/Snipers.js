import React from 'react';
import Card from '../components/Card';
import Title from '../components/Title';

const Snipers = ({ weaponDataSnipers, title }) => {
  return (
    <section>
      {title && <Title title={title}/>}
      <section className="weapon-container">
        {weaponDataSnipers &&
          weaponDataSnipers.map((weaponData, index) => (
            <Card weaponData={weaponData} key={index} />
          ))}
      </section>
    </section>
  );
};

export default Snipers;
