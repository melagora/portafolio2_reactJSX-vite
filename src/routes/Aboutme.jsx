import React, { useState, useEffect } from "react";
import developer from "@/assets/programming-amico.svg";

import "@/styles/styles.css";

export default function Aboutme() {
  return (
    <section className="general_section">
      <div className="content_aboutme">
        <div className="content1_aboutme">
          {/* <p>Info Corta</p> */}
          <p>
            Soy desarrollador junior con experiencia en la creación de
            aplicaciones web utilizando React. Me apasiona aprender y aplicar
            tecnologías modernas en proyectos reales.
          </p>
          <p>
            He trabajado en varios proyectos donde he implementado 
            <b>
              <i> React Routes, React Hooks y React Forms</i>
            </b>
            , desarrollando componentes reutilizables y estilizados con CSS puro
            para mantener <mark>interfaces consistentes y atractivas.</mark>
          </p>
          <p>
            Estoy en búsqueda de oportunidades para colaborar en equipos
            dinámicos donde pueda aportar y seguir aprendiendo de la mano de
            profesionales experimentados en el desarrollo web.
          </p>
          <p>
            ¡No dudes en contactarme si deseas establecer una conexión o
            discutir oportunidades potenciales!
          </p>
        </div>
        <div className="content2_aboutme">
          <div className="content2_aboutme_img">
            <img src={developer} alt="Perfil" className="animate-down" />
          </div>
        </div>
      </div>
    </section>
  );
}
