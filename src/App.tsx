import GlobalStyle from 'App.styles';
import React from 'react';

import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/shared/Navbar/Navbar';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <About />
      <Navbar />
    </div>
  );
};

export default App;
