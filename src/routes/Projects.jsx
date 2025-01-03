import React from "react";
import "@/styles/styles.css";
import proyeject3 from "@/assets/projects/project3.png";
import proyeject5 from "@/assets/projects/project5.png";
import proyeject2 from "@/assets/projects/project2.png";
import proyeject4 from "@/assets/projects/project4.png";

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
              <div className="etiquetaGeneral etiquetaReact">
                <p>React</p>
              </div>
              <div className="etiquetaGeneral etiquetaHtml">
                <p>HTML</p>
              </div>
              <div className="etiquetaGeneral etiquetaCss">
                <p>CSS</p>
              </div>
              <div className="etiquetaGeneral etiquetaJs">
                <p>JavaScript</p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_top">
              <a href="https://landingpagebootstrap-melvin-act4-kodi.netlify.app/">
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
              <div className="etiquetaGeneral etiquetaReact">
                <p>React</p>
              </div>
              <div className="etiquetaGeneral etiquetaHtml">
                <p>HTML</p>
              </div>
              <div className="etiquetaGeneral etiquetaCss">
                <p>CSS</p>
              </div>
              <div className="etiquetaGeneral etiquetaJs">
                <p>JavaScript</p>
              </div>
              <div className="etiquetaGeneral etiquetaReactRouter">
                <p>React-Router</p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_top">
              <a href="https://practicahamburguesa-bootcampkodigo.netlify.app/">
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
            <div className="etiquetaGeneral etiquetaHtml">
                <p>HTML</p>
              </div>
              <div className="etiquetaGeneral etiquetaCss">
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_top">
              <a href="https://mini-manejo-de-inventario-con-firebase-autenticacion.vercel.app/">
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
        </div>
      </div>
    </div>
  );
}
