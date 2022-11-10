import React, { useState } from 'react';

// import pages
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
// import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line
import "swiper/css/bundle";
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  // set up function changepage
  const changePage = (page) => {
    setCurrentPage(page);
  };
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Skills":
        return <Skills />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar changePage={changePage} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
