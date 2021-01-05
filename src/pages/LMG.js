import React from 'react'
import Card from '../components/Card';

const LMG = ({ weaponDataLMG}) => {
    return (
      <section className="weapon-container">
        {weaponDataLMG.map((weaponData, index) => (
          <Card weaponData={weaponData} key={index} />
        ))}
      </section>
    );
}

export default LMG
