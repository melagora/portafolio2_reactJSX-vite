import React, { useState, useEffect } from "react";
import "@/styles/styles.css";
import perfilImg from "@/assets/perfil.jpg";
import githubLOGO2 from "@/assets/github_LOGO2.svg";
import linkedinLOGO from "@/assets/linkedin_LOGO.svg";

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
    <section>
      <div className="general_section">
        <div className="content">
          <div className="content1">
            <div className="container1_img" style={{ boxShadow: shadow }}>
              <img src={perfilImg} alt="Imagen de perfil Melvin González" />
            </div>
            <div className="container1_redes">
              <p>Contacto:</p>
              <a href="https://www.linkedin.com/in/melagora" target="_blank">
                <div className="container1_img_redes">
                  <img src={linkedinLOGO} alt="Logo Linkedln" />
                </div>
              </a>

              <a href="https://github.com/melagora" target="_blank">
                <div className="container1_img_redes container1_img_redes2">
                  <img src={githubLOGO2} alt="Logo Github" />
                </div>
              </a>
            </div>
          </div>
          <div className="content2">
            <div className="container2_text">
              <div className="container2_text1">
                <p>¡Hola!</p>
              </div>
              <div className="container2_text2">
                <p>
                  Te saluda <mark>Melvin González</mark>
                </p>
              </div>
              <div className="container2_text3">
                <p>Desarrollador - Web JR -</p>
              </div>
              <div className="container2_text4">
                <p>
                  | Front-end developer React & JavaScript 
                </p>
                <p>| Web Developer |</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
