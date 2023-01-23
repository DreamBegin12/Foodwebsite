import React from 'react';
import ReactDOM from 'react-dom';
import  Header from "./component/Header";
import About from './component/About';
import Shop from './component/Shop';
import Menu from "./component/Menu";
import Client from './component/Client';
import Prices from './component/Prices';

import"./index.css";
import Footer from './component/Footer';
ReactDOM.render(
  <>
  
  <Header/>
  <About/>
  <Shop/>
  <Menu/>
  <Client/>
  <Prices/>
  <Footer/>
  </>,document.getElementById('root')
)