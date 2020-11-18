import React from 'react';

import Routes from "./routes";

import { BrowserRouter } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyle from './styles/global'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
    <GlobalStyle />
    <Footer />
    {/* <Header /> */}
    </>
  );
}

export default App;