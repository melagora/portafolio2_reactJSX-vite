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
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          />
          <p className="subtittleContact">Correo electrónico personal:</p>
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
              Clic para visitar el perfil de
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
              Clic para visitar el perfil de
            </a>
            <i style={pad} className="bi bi-github"></i>
          </button>
        </section>
        <h1 style={{ paddingTop: "20px" }}>- Más Info -</h1>
        <section>
          <p className="subtittleContact">Alura Latam + Oracle:</p>
          <button className="buttonContact">
            <a
              href="https://app.aluracursos.com/user/melagora/fullCertificate/d28d32bc68f5d351c5759e03ab4a72aa"
              target="_blank"
              rel="noopener noreferrer"
            >
               Ver certificados de finalización:
            </a>
            <i style={pad} class="fa-solid fa-user-graduate"></i>
          </button>
        </section>
        <section>
          <p className="subtittleContact">Microsoft Learns:</p>
          <button className="buttonContact">
            <a
              href="https://learn.microsoft.com/es-es/users/melagora/transcript/dz6g4skwlg33825"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver módulos completados de:
            </a>
            <i style={pad} class="fa-brands fa-windows"></i>
          </button>
        </section>
      </div>
    </div>
  );
}
