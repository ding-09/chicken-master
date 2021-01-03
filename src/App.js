import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import AR from './pages/AR';

const App = () => {
  const [weaponData, setWeaponData] = useState({
    ar: [],
    dmr: [],
    lmg: [],
    smg: [],
    sniper: [],
    shotgun: [],
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
      fetchData(key);
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home allWeaponData={weaponData} />
        </Route>
        <Route exact path="/ar">
          <AR weaponDataAR={weaponData.ar} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
