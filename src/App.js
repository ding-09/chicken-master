import React from 'react';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import Nav from './components/Nav';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Nav />
    </div>
  );
};

export default App;
