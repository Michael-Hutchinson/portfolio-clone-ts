import GlobalStyle from 'App.styles';
import React from 'react';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Email from './components/shared/Email/Email';
import Work from './components/Work/Work';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main>
        <Home />
        <About />
        <Work />
        <Email />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
