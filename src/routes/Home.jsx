import React, { useState, useEffect } from "react";
import "@/styles/styles.css";
import perfilImg from "@/assets/perfil.jpg";
import githubLOGO2 from "@/assets/github_LOGO2.svg";
import linkedinLOGO from "@/assets/linkedin_LOGO.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Home() {
  const [shadow, setShadow] = useState("10px 5px 5px #08fdd8");
  const [buttonText, setButtonText] = useState("Descargar mi CV");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = e.clientX - centerX;
      const y = e.clientY - centerY;
      setShadow(`${-x / 30}px ${-y / 30}px 10px #08fdd8`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleDownload = () => {
    if (buttonText === "Descargar mi CV") {
      const downloadPromise = new Promise((resolve, reject) => {
        const link = document.createElement("a");
        link.href = "https://drive.google.com/uc?export=download&id=1Oyxko7qkTCCTjxBxMw7y8_jA_-N0Ixnt";
        link.download = "CV-FULLSTACK-MELVIN-GONZALEZ-2025.pdf";
        document.body.appendChild(link);
        
        // Simular tiempo de descarga
        setTimeout(() => {
          link.click();
          document.body.removeChild(link);
          resolve("CV descargado con éxito.");
        }, 2000); // Simula el tiempo de espera para la descarga
      });
  
      toast.promise(downloadPromise, {
        pending: "Descargando CV...",
        success: "CV descargado con éxito.",
        error: "Error al descargar el CV.",
      });
  
      setButtonText("Gracias por descargar mi CV");
    } else {
      toast.info("Ya has descargado el CV. ¡Gracias!");
    }
  };
  

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
                <p>| Front-end developer React & JavaScript</p>
                <p>| Web Developer |</p>
              </div>
              <div className="container2_CV">
                <button onClick={handleDownload} className="transition-all">
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Agregamos el ToastContainer aquí para que los toasts funcionen */}
      <ToastContainer pauseOnFocusLoss={false} />
    </section>
  );
}

export default Home;
