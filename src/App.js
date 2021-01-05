import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Nav from './components/Nav';
import AR from './pages/AR';
import DMR from './pages/DMR';
import SMG from './pages/SMG';
import LMG from './pages/LMG';
import Snipers from './pages/Snipers';
import Shotguns from './pages/Shotguns';

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
          <AR title={"AR"} weaponDataAR={weaponData.ar} />
          <DMR title={"DMR"} weaponDataDMR={weaponData.dmr} />
          <SMG title={"SMG"} weaponDataSMG={weaponData.smg} />
          <LMG title={"LMG"} weaponDataLMG={weaponData.lmg} />
          <Snipers title={"Snipers"} weaponDataSnipers={weaponData.sniper} />
          <Shotguns title={"Shotguns"} weaponDataShotguns={weaponData.shotgun} />
        </Route>
        <Route exact path="/ar">
          <AR weaponDataAR={weaponData.ar} />
        </Route>
        <Route exact path="/dmr">
          <DMR weaponDataDMR={weaponData.dmr} />
        </Route>
        <Route exact path="/smg">
          <SMG weaponDataSMG={weaponData.smg} />
        </Route>
        <Route exact path="/lmg">
          <LMG weaponDataLMG={weaponData.lmg} />
        </Route>
        <Route exact path="/snipers">
          <Snipers weaponDataSnipers={weaponData.sniper} />
        </Route>
        <Route exact path="/shotguns">
          <Shotguns weaponDataShotguns={weaponData.shotgun} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
