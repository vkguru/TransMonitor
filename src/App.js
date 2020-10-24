import React from 'react';
import Nav from './components/nav';
import SideMenu from './components/sideMenu';
import Trans from './components/trans';
import './asset/css/style.css';
function App() {
  return (
    <>
      <Nav />
      <SideMenu />
      <main className="main">
        <Trans />
      </main>
    </>
  );
}

export default App;
