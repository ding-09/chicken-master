import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import axios from 'axios';
import Header from './components/Header';
import Nav from './components/Nav';

const App = () => {
  const [weaponData, setWeaponData] = useState({
    "ar": [],
    "dmr": [],
    "lmg": [],
    "smg": [],
    "sniper": [],
    "shotgun": [],
  });

  useEffect(() => {
    const fetchData = async (weaponType) => {
      const results = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/${weaponType}`
      );
      setWeaponData((prevState) => ({
        ...prevState,
        [weaponType]: results.data[[weaponType.toUpperCase()]],
      }));
    };
    for (let key in weaponData) {
      fetchData(key)
    }
  }, []);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Nav />
    </div>
  );
};

export default App;
