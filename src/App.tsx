import GlobalStyle from 'App.styles';
import React from 'react';

import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Email from './components/shared/Email/Email';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main>
        <Home />
        <About />
        <Email />
        <Footer />
      </main>
    </div>
  );
};

export default App;
