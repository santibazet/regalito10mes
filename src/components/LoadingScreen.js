import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/flowers.json'; 
import './LoadingScreen.css'; // Crea este archivo para los estilos personalizados

const LoadingScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="loading-container"> {/* Aplica los estilos del fondo blanco */}
      <Lottie options={defaultOptions} height={200} width={200} />
      <p>Cargando amor eterno...</p> {/* Mensaje de carga */}
    </div>
  );
};

export default LoadingScreen;
