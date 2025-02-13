import React from "react";
import "@/styles/styles.css";
import proyeject1 from "@/assets/projects/project1.png";
import proyeject3 from "@/assets/projects/project3.png";
import proyeject5 from "@/assets/projects/project5.png";
import proyeject2 from "@/assets/projects/project2.png";
import proyeject4 from "@/assets/projects/project4.png";
import proyeject6 from "@/assets/projects/project6.png";


export default function () {
  return (
    <div className="general_section">
      <div className="contentProjects">
        <div className="container">
          <div className="cards">
            <div className="card_top">
              <a
                href="https://finanzas-facilita-sv-app-anf135-2024.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="card_image"
                  src={proyeject3}
                  alt="Proyecto APP Financiera"
                />
              </a>
            </div>
            <div className="text_card">
              <p>
                App web responsive que nos brinda indicadores financieros con
                información pre-cargada.
              </p>
            </div>
            <div className="card_bottom">
              <div className="etiquetaGeneral">
                <p>React</p>
              </div>
              <div className="etiquetaGeneral">
                <p>HTML</p>
              </div>
              <div className="etiquetaGeneral">
                <p>CSS</p>
              </div>
              <div className="etiquetaGeneral">
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_top">
              <a href="https://kodimusic-clon-spot.vercel.app/" target="_blank"
                rel="noreferrer">
                <img
                  className="card_image"
                  src={proyeject5}
                  alt="SPA con ReactJs de musica"
                />
              </a>
            </div>
            <div className="text_card">
              <p>
                SPA implementando un diseño responsive, ReactJs,
                react-router-dom + despliegue.
              </p>
            </div>
            <div className="card_bottom">
              <div className="etiquetaGeneral">
                <p>React</p>
              </div>
              <div className="etiquetaGeneral">
                <p>HTML</p>
              </div>
              <div className="etiquetaGeneral">
                <p>CSS</p>
              </div>
              <div className="etiquetaGeneral">
                <p>JavaScript</p>
              </div>
              <div className="etiquetaGeneral">
                <p>React-Router</p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_top">
              <a href="https://landingpagebootstrap-melvin-act4-kodi.netlify.app/" target="_blank"
                rel="noreferrer">
                <img
                  className="card_image"
                  src={proyeject1}
                  alt="SPA con ReactJs de musica"
                />
              </a>
            </div>
            <div className="text_card">
              <p>
              LandingPage static con BootStrap y página de estilos CSS
              </p>
            </div>
            <div className="card_bottom">
              <div className="etiquetaGeneral">
                <p>Despliegue</p>
              </div>
              <div className="etiquetaGeneral">
                <p>HTML</p>
              </div>
              <div className="etiquetaGeneral">
                <p>CSS</p>
              </div>
              <div className="etiquetaGeneral">
                <p>Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_top">
              <a href="https://practicahamburguesa-bootcampkodigo.netlify.app/" target="_blank"
                rel="noreferrer">
                <img
                  className="card_image"
                  src={proyeject2}
                  alt="Práctica WEB de hamburguesas solo HTML y CSS"
                />
              </a>
            </div>
            <div className="text_card">
              <p>Práctica WEB estática solo HTML y CSS + la implementación de despliegue del sitio.</p>
            </div>
            <div className="card_bottom">
            <div className="etiquetaGeneral">
                <p>HTML</p>
              </div>
              <div className="etiquetaGeneral">
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_top">
              <a href="https://mini-manejo-de-inventario-con-firebase-autenticacion.vercel.app/" target="_blank"
                rel="noreferrer"> 
                <img
                  className="card_image"
                  src={proyeject4}
                  alt="Manejo de inventarios con react y firebase"
                />
              </a>
            </div>
            <div className="text_card">
              <p>
                Manejo de inventario con firebase como DB y con adimintración de
                autenticación de usuarios.
              </p>
            </div>
            <div className="card_bottom">
              <div className="etiquetaGeneral">
                <p>React</p>
              </div>
              <div className="etiquetaGeneral">
                <p>HTML</p>
              </div>
              <div className="etiquetaGeneral">
                <p>CSS</p>
              </div>
              <div className="etiquetaGeneral">
                <p>Firebase</p>
              </div>
              <div className="etiquetaGeneral">
                <p>React-Router</p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_top">
              <a href="https://github.com/melagora/AlojamientosCRUD-Bosque/tree/main?tab=readme-ov-file" target="_blank"
                rel="noreferrer">
                <img
                  className="card_image"
                  src={proyeject6}
                  alt="Manejo de inventarios con react y firebase"
                />
              </a>
            </div>
            <div className="text_card">
              <p>
              CRUD de Alojamientos | Plataforma web para gestionar alojamientos.
              </p>
            </div>
            <div className="card_bottom">
              <div className="etiquetaGeneral">
                <p>PHP</p>
              </div>
              <div className="etiquetaGeneral">
                <p>HTML</p>
              </div>
              <div className="etiquetaGeneral">
                <p>CSS</p>
              </div>
              <div className="etiquetaGeneral">
                <p>MySQL</p>
              </div>
              <div className="etiquetaGeneral">
                <p>CRUD PHP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
