import React, { useEffect, useState } from "react";
import "/workspaces/Contador-simple-ali-alejandro-andrade/src/styles/index.css";

// Componente principal
const Home = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo;
    if (activo) {
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [activo]);

  const formatearTiempo = (total) => {
    const hrs = Math.floor(total / 3600);
    const mins = Math.floor((total % 3600) / 60);
    const secs = total % 60;

    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="contenedor">
      <h1>Contador de Tiempo</h1>

      <div className="contador">
        {formatearTiempo(segundos)}
      </div>

      <div className="botones">
        <button onClick={() => setActivo(true)} className="btn iniciar">
          Iniciar
        </button>

        <button onClick={() => setActivo(false)} className="btn pausar">
          Pausar
        </button>

        <button
          onClick={() => {
            setActivo(false);
            setSegundos(0);
          }}
          className="btn reiniciar"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
};

export default Home;