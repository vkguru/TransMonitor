import React from 'react';
import Nav from './components/nav';
import SideMenu from './components/sideMenu';
import Trans from './components/trans';
import Summary from './components/summary';
import Payment from './components/payment';
import './asset/css/style.css';
function App() {
  return (
    <>
      <Nav />
      <SideMenu />
      <main className="main">
        <Trans />
        <Summary />
        <Payment />
      </main>
    </>
  );
}

export default App;
