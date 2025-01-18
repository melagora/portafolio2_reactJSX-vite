import React from "react";
import "@/styles/styles.css";

export default function Contact() {
  const pad = { paddingLeft: "10px" };

  return (
    <div className="general_section">
      <div className="contentContact">
        <h1>- Contacto -</h1>
        <section>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css"
          />
          <p className="subtittleContact">Correo electronico personal:</p>
          <div>
            <button
              className="buttonContact"
              onClick={() => window.open("mailto:mgonzalezramos21@gmail.com")}
            >
              Enviar correo
              <i style={pad} className="bi bi-envelope-fill"></i>
            </button>
          </div>
        </section>
        <section>
          <p className="subtittleContact"> Redes Sociales:</p>
          <div className="redesContacto">
            <button className="buttonContact">
              Instagram
              <i style={pad} className="bi bi-instagram"></i>
            </button>
            <button className="buttonContact">
              Facebook
              <i style={pad} className="bi bi-facebook"></i>
            </button>
          </div>
        </section>
        <section>
          <p className="subtittleContact">Linkedln:</p>
          <button className="buttonContact">
            <a
              href="https://www.linkedin.com/in/melagora/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click para visitar el perfil de
            </a>
            <i style={pad} className="bi bi-linkedin"></i>
          </button>
        </section>
        <section>
          <p className="subtittleContact">GitHub:</p>
          <button className="buttonContact">
            <a
              href="https://github.com/melagora"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click para visitar el perfil de
            </a>
            <i style={pad} className="bi bi-github"></i>
          </button>
        </section>
      </div>
    </div>
  );
}
