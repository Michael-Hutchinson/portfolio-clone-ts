import React, { ReactElement } from 'react';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from 'utils/context';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Email from './components/shared/Email/Email';
import Work from './components/Work/Work';
import GlobalStyle from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';

const App = (): ReactElement => {
  const themeState = useContext(ThemeContext);
  const themeMode = themeState.theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
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
    </ThemeProvider>
  );
};

export default App;
