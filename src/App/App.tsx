import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import styles from './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home/Home';
import IntroScreen from '../components/IntroScreen';
import Navbar from '../components/Navbar';

function App() {
  const [showIntroScreen, setShowIntroScreen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowIntroScreen(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={styles.app}>
      <Navbar />
      {showIntroScreen && <IntroScreen />}
      <BrowserRouter>
        <Routes>
          <Route path="/hej" element={<div>hej</div>} />
          <Route path="/jack" element={<div>jack</div>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
