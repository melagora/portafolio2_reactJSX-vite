import React from "react";
import "@/styles/styles.css";

export default function Contact() {
  return (
    <div className="general_section">
      <div className="contentContact">
        <h1>- Contacto -</h1>
        <section>
          <p className="subtittleContact">Correo electronico personal:</p>
          <div>
            <button
              className="buttonContact"
              onClick={() => window.open("mailto:mgonzalezramos21@gmail.com")}
            >
              Enviar correo
            </button>
          </div>
        </section>
        <section>
          <p className="subtittleContact"> Redes Sociales:</p>
          <div className="redesContacto">
            <button className="buttonContact">Instagram</button>
            <button className="buttonContact">Facebook</button>
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
              Click para visitar el perfil de IN
            </a>
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
              Click para visitar el perfil de GIT
            </a>
          </button>
        </section>
      </div>
    </div>
  );
}
