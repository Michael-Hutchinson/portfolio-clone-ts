import GlobalStyle from 'App.styles';
import React from 'react';

import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <About />
    </div>
  );
}

export default App;
