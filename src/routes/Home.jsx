import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import perfilImg from "../assets/perfil.jpg";

function Home() {
  const [shadow, setShadow] = useState("10px 5px 5px #08fdd8");

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Obtener el centro de la ventana
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      // Calcular la posición del mouse relativa al centro de la ventana
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;
      // Ajustar la dirección de la sombra en dirección opuesta al mouse
      setShadow(`${-x / 30}px ${-y / 30}px 10px #08fdd8`);
    };

    // Añadir el evento de mousemove al documento
    document.addEventListener("mousemove", handleMouseMove);

    // Limpiar el evento al desmontar el componente
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="general_section">
      <div className="content">
        <div className="content1">
          <div
            className="container1_img"
            style={{ boxShadow: shadow }}
          >
            <img src={perfilImg} alt="Perfil" />
          </div>
        </div>
        <div className="content2">
          <div className="container2_text">
            <p className="container2_text1">¡Hola!</p>
            <p className="container2_text2">Te saluda Melvin González</p>
            <p className="container2_text3">Desarrollador - Web JR -</p>
            <p className="container2_text4">/ Front-end developer React & JavaScript / Web Developer /</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;