import React from "react";
import "../styles/styles.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Netlify",
  "Vercel",
  "Github Pages",
  "Bootstrap",
  "MySql",
  "Adobe Photoshop",
  "Git",
  "Github",
  "Trello",
  "Java",
  "Python",
  "JDT",
  "Spring",
  "Node.js",
  "Apache Maven",
  "Firebase",
  "MongoDB",
  "MariaDB",
  "Canva",
  "Postman",
  "GitLab",
  "Docker",
];

const colorsBasicPlus = [
  "#e34f26",
  "#1572b6",
  "#c3b017",
  "#44889d",
  "#005a53",
  "#000000",
  "#121013",
  "#690dc6",
  "#4479a1",
  "#1572b6",
  "#e34f26",
  "#121013",
  "#0f5283",
  "#ed8b00",
  "#3670a0",
  "#000000",
  "#6db33f",
  "#6da55f",
  "#c71a36",
  "#039be5",
  "#4ea94b",
  "#4479a1",
  "#1572b6",
  "#e34f26",
  "#121013",
  "#0f5283",
  "#e34f26",
];

export default function Skills() {
  return (
    <div className="general_section">
      <div className="contentSkill">
        <div>
          <p style={{ lineHeight: "2" }}>
            <div className="text-2xl font-bold text-center ">Tecnologías de conocimiento básico/intermedio</div>
          </p>
        </div>
        <div className="skills w-auto flex flex-wrap justify-center transition-transform duration-300">
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colorsBasicPlus[index % colorsBasicPlus.length],
                padding: "20px",
                margin: "5px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60px",
              }}
            >
              <p style={{ lineHeight: "1.2", margin: 0 }}>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
