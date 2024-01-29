import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';
import Main from './layouts/main/main';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './assets/globals/global.css';
import './assets/globals/global.js'
import './App.css';


function App() {
  return (
    <BrowserRouter >
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
