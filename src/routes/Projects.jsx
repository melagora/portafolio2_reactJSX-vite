import React from "react";
import "@/styles/styles.css";

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
                  src="/src/assets/projects/project3.png"
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
                  src="/src/assets/projects/project5.png"
                  alt=""
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
                  src="/src/assets/projects/project2.png"
                  alt=""
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
                  src="/src/assets/projects/project4.png"
                  alt=""
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
