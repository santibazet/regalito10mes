import React, { useEffect } from 'react';
import './AnniversaryLetter.css'; // Archivo CSS para los estilos y animaciones
import song from '../assets/sounds/background.mp3'; // Ruta a la canción de fondo

const AnniversaryLetter = () => {

  useEffect(() => {
    const audio = new Audio(song);
    audio.volume = 0.5;
    
    // Intenta reproducir el audio y maneja posibles errores
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error("Error al reproducir la canción:", error);
      }
    };

    playAudio();
    audio.addEventListener('ended', playAudio);

    // Pausar el audio al desmontar el componente
    return () => {
      audio.pause();
      audio.currentTime = 0; // Opcional: reinicia el audio cuando se salga de la página
      audio.removeEventListener('ended', playAudio); // Elimina el evento
    };
  }, []);

  return (
    <div className="letter-container">
      <div className="decorations"></div> {/* Elementos decorativos */}
      <div className="letter">
        <h2>Carta por nuestros 10 meses juntos</h2>
        <p>Holi princesa,</p>
        <p>
          Hoy, cuando lees esta carta el 03/11, cumplimos otro mes más juntos, ya van 10 meses, y no puedo creer lo rápido que pasa el tiempo. Estamos a solo 2 meses de cumplir el año, y me llena de emoción todo lo que vivimos y lo que aún nos falta. No puedo esperar a seguir viviendo cosas increíbles con vos.
        </p>
        <p>
          Estos 15 días que te fuiste (aunque solo van 2 mientras escribo esto), me están haciendo darme cuenta aún más de cuánto te extraño linda. Cada día sin verte se siente eterno, y no dejo de pensar en tu sonrisa, en tu compañía, en lo bien que me hacés. Me hace falta abrazarte, estar con vos, compartir momentos juntos. Te extraño más de lo que te imaginás.
        </p>
        <p>
          Seguramente, te hayas dado cuenta mientras lees esto que lo que suena de fondo es la instrumental de "Best Song Ever", que me dijiste que era de tus canciones favoritas (y que te gustaba tanto el video que me lo hiciste ver jaja) por eso esa canción me recuerda a vos. Pero más que esa, hay otra que me hace pensar mucho en nosotros: "Strong". Cuando vimos el documental, y cuando escuché la letra (lo poco que mi inglés me permitió entender, y por eso tenía cara de concentrado), sentí que iba mucho con cómo somos nosotros.
        </p>
        <p>
          Me gusta mucho la parte que dice:
          <i>"My hands, your hands, tied up like two ships... I'd do anything to save it... My heart, your heart, sit tight like bookends."</i>  
          Y es que, aunque a veces la vida nos pone desafíos y hay distancias de por medio, pero siempre, siempre estamos juntos, como si nada pudiera separarnos de verdad. Nuestra relación es fuerte, honesta, sincera, y vos sabes que yo haría cualquier cosa por proteger lo que tenemos, porque siempre vas a poder esperar lo mejor de mí.
        </p>
        <p>
          Otra parte que me gustó también fue la que dice:
          <i>"'Cause when I'm not with you, I'm weaker... Is that so wrong? That you make me strong."</i>  
          Porque es así, cuando no estoy con vos, siento que me falta algo, como si no estuviera completo. Estar con vos me hace más fuerte, me hace mucho bien. Te necesito conmigo, sos una parte imprescindible de mi vida.
        </p>
        <p>
          Estos días sin vos me hacen ver aún más claro lo importante que sos en mi vida. Estoy contando las horas para que vuelvas y podamos seguir construyendo todo lo que soñamos juntos, construyendo momentos que van a quedar y vamos a contar a nuestros hijos. Te quiero abrazar, estar a tu lado y decirte todo esto en persona. No puedo esperar.
        </p>
        <p>
          Te amo más de lo que puedo expresar con palabras. Gracias por hacerme sentir siempre tan especial mi amor. Estos 10 meses fueron increíbles, pero lo que más me emociona es todo lo que nos queda por vivir.
        </p>
        <p>
          Atentamente, tu futuro esposo (no hay otra opción).
        </p>
      </div>
    </div>
  );
}

export default AnniversaryLetter;
