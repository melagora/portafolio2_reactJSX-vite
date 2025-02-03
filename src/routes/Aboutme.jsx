import React, { useState, useEffect } from "react";
import developer from "@/assets/programming-amico.svg";

import "@/styles/styles.css";

export default function Aboutme() {
  return (
    <section className="general_section">
      <div className="content_aboutme">
        <div className="content1_aboutme">
          <div>
            {/* <p>Info Corta</p> */}
            <p>
              Soy un desarrollador fullstack junior con experiencia en la creación de aplicaciones web, trabajando tanto en el <b><i>frontend con React</i></b> como en el <b><i>backend con PHP y Laravel</i></b> para desarrollar <mark>APIs CRUD.</mark>
            </p>
            <p>
            He implementado soluciones utilizando React Routes, React Hooks y React Forms, desarrollando componentes reutilizables y estilizados con CSS puro, Bootstrap y Tailwind para <mark> mantener interfaces atractivas y funcionales. </mark>
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
