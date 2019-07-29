import React from 'react';
import logo from './logo.svg';
//Now we will import "Header" which is const from Header.react.js
import Header from './Header/Header.react';
import Footer from './Footer/Footer.react';
import Content from './Content/Content.react';
import './App.css';
import abpos from './abpos.png';
import Navigation from './Navigation/Navigation.react';
import {BrowserRouter} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Header/>
      <Navigation></Navigation> */}
      <Header/>
      <Navigation></Navigation>
      {/* <Content request={request}></Content> */}
      {/* <Footer/>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
