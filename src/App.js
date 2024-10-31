import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Asegúrate de tener React Router instalado
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import MarriageAct from './components/MarriageAct';
import AnniversaryLetter from './components/AnniversaryLetter'; // Importamos la nueva página de la carta

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [actAccepted, setActAccepted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  const handleFingerprintHold = () => {
    setActAccepted(true); // Se acepta el acta cuando se mantuvo el botón por 3 segundos
  };

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Routes>
            <Route path="/" element={<MarriageAct onFingerprintHold={handleFingerprintHold} />} />
            {actAccepted && <Route path="/anniversary-letter" element={<AnniversaryLetter />} />}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
