import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Configuration } from './pages/Configuration';
import { Raffle } from './pages/Raffle';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuration />}/>
          <Route path='/raffle' element={<Raffle />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
