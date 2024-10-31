import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './MarriageAct.css';
import fingerprintImage from '../assets/images/fingerprint.png';
import LoadingScreen from './LoadingScreen';

const MarriageAct = ({ onFingerprintHold }) => {
  const [isHolding, setIsHolding] = useState(false);
  const [holdTime, setHoldTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (isHolding) {
      timer = setInterval(() => {
        setHoldTime((prev) => prev + 100);
      }, 100);
    } else {
      clearInterval(timer);
      setHoldTime(0);
    }

    if (holdTime >= 3000) {
      setLoading(true);
      clearInterval(timer);
      setTimeout(() => {
        onFingerprintHold();
        setLoading(false);
        navigate('/anniversary-letter');
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isHolding, holdTime, onFingerprintHold, navigate]);

  if (loading) {
    return (
      <div className="loading-container">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div className="act-container">
      <div className="background-blur" /> 
      <div className="letter">
        <h2>Declaración de Amor de la Princesa Avril Villaró</h2>
        <p>Yo, la princesa Avril Villaró, juro y declaro formalmente en mis plenas facultades mentales a mi novio que:</p>
        <ul>
          <li>Le voy a dar mimos, besos y abrazos siempre, incluso cuando no me los pida.</li>
          <li>Lo voy a amar en todos los escenarios posibles.</li>
          <li>Le voy a dar regalitos que le alegren el día.</li>
          <li>Le voy a ser completamente fiel (por mi bien).</li>
          <li>Lo voy a acompañar en todo lo que venga por delante, no importa si es malo o bueno.</li>
          <li>Me voy a casar con él.</li>
          <li>Voy a viajar con él.</li>
          <li>Voy a tener hijos con él.</li>
          <li>Al terminar de leer esto, le debo dar 100 besos (importante).</li>
          <li>Como sigo leyendo, ahora le debe 20 más.</li>
        </ul>
        <p>
          Para aceptar esto (no hay más opción) en un acto real y no simbólico, apretá por <strong>3 segundos</strong> la huella dactilar,
          dando <strong>TOTAL consentimiento</strong> sobre todo lo anteriormente declarado, para jurarle amor eterno a tu hermoso novio.
        </p>
        <div
          className="fingerprint-button"
          onMouseDown={() => setIsHolding(true)}
          onMouseUp={() => setIsHolding(false)}
          onMouseLeave={() => setIsHolding(false)}
          onTouchStart={() => setIsHolding(true)} 
          onTouchEnd={() => setIsHolding(false)}  
          onContextMenu={(e) => e.preventDefault()} // Evita el menú contextual
        >
          <img src={fingerprintImage} alt="Fingerprint" />
        </div>
        <p className="button-text">
          {isHolding ? <strong>Van {Math.ceil(holdTime / 1000)} segundos</strong> : <strong>Acepta mi amor (o muerte)</strong>}
        </p>
      </div>
    </div>
  );
};

export default MarriageAct;
