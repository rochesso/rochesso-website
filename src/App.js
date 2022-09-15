import { Fragment } from 'react';

import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Nav from './components/layout/nav/Nav';
import Home from './pages/home';

// import style from './App.module.css';

function App() {
  return (
    <Fragment>
      <Nav />
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
