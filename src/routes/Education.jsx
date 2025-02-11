import React, { useState, useEffect } from "react";
import "@/styles/styles.css";

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const hoverColors = ["#363636", "#836900", "#230094", "#028f00", "#8f0000"];

  useEffect(() => {
    if (hoveredIndex !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === 9 ? 0 : (prevIndex ?? -1) + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setActiveIndex(null);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="general_section">
      <div className="p-5">
        <div className="flex flex-col gap-5 m-5 items-center justify-center">
          <h1 className="text-2xl font-bold">Educación y cursos:</h1>
          <section className="flex flex-wrap justify-center items-center gap-5">
            {[
              "Ingeniería de Sistemas Informáticos",
              "FullStack Jr",
              "Técnico Programador Analista en 4° Gen",
              "Formación: Java y Spring Boot",
              "SQL con MySQL",
              "Principiante en Programación G5 - ONE",
              "Fundamentos en Gestión de Proyectos",
              "Scrum Foundation Professional Certificate SFPC (v2020) Spanish",
              "Curso Profesional de HTML y CSS",
              "Ciencia de Datos",
              "Técnico Operador bajo Windows y Office",
            ].map((title, index) => (
              <div
                key={index}
                className={`bg-[#00947e] w-[375px] min-h-[100px] border-4 border-white rounded-2xl flex flex-col items-center justify-center text-center p-3 m-2 transition-all`}
                style={{
                  transform: activeIndex === index ? "scale(1.05)" : hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                  backgroundColor:
                    activeIndex === index
                      ? hoverColors[index % hoverColors.length]
                      : "#00947e",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <h2 className="text-lg font-bold">{title}</h2>
                <h5 className="text-sm italic">
                  {
                    [
                      "Universidad de El Salvador",
                      "Bootcamp KODIGO - El Salvador",
                      "Manchester Computer Training - Presencial",
                      "Alura Latam - Online",
                      "Alura Latam - Online",
                      "Alura Latam - Online",
                      "SoyLider.net",
                      "CertiProf",
                      "Azul Web - Online",
                      "CONEXIÓN - Online",
                      "Manchester Computer Training - Presencial",
                    ][index]
                  }
                </h5>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
