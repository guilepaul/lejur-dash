import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import GlobalStyle from './styles/global'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
    <GlobalStyle />
    {/* <Header /> */}
    <Dashboard />
    <Footer />
    </>
  );
}

export default App;