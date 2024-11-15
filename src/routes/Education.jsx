import React from "react";
import "@/styles/styles.css";

// const educationSuperior = ["Ingeniería de Sistemas Informáticos", "text 2"];
// const descriptionEducationSuperior = ["Descripción1", "Descripción2"];

export default function Education() {
  return (
    <div className="general_section">
      <div className="contentEducation">
        <div className="contentEducation1">
          {/* {educationSuperior.map((education, index) => (
            <div key={index}>
              <h2>{education}</h2>
              <p>
                {descriptionEducationSuperior[index] ||
                  "No olvides ingresar las descripciones en orden"}
              </p>
            </div>
          ))} */}
          <h1>Educación y cursos:</h1>
          <div>
            <h2>Ingeniería de Sistemas Informáticos</h2>
            <h5>Universidad de El Salvador</h5>
            <p>(Cuarto año - En curso)</p>
          </div>
        </div>
        <div className="contentEducation2">
          <div>
            <h2>FullStack Jr</h2>
            <h5>Bootcamp KODIGO - El Salvador</h5>
            <p>(En curso de Julio a Diciembre - 2024)</p>
          </div>
          <div>
            <h2>Java y Srping Boot</h2>
            <h5>Alura Latam - Online</h5>
            <p>Octubre de 2023</p>
          </div>
          <div>
            <h2>SQL con MySQL</h2>
            <h5>Alura Latam - Online</h5>
            <p>Agosto de 2023</p>
          </div>
          <div>
            <h2>Principiante en Programación G5 - ONE</h2>
            <h5>Alura Latam - Online</h5>
            <p>Mayo de 2023</p>
          </div>
          <div>
            <h2>Scrum Foundation Professional Certificate SFPC (v2020) Spanish</h2>
            <h5>CertiProf</h5>
            <p>Abril de 2023</p>
          </div>
          <div>
            <h2>Curso Profesional de HTML y CSS</h2>
            <h5>Azul Web - Online</h5>
            <p>Abril de 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
