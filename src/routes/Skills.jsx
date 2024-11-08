import React from "react";
import "../styles/styles.css";


const skillsBasicPlus = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Netlify', 'Vercel', 'Github Pages', 'Bootstrap', 'MySql', 'Adobe Photoshop', 'Git', 'Github', 'Trello'];

const colorsBasicPlus = ["#e34f26", "#1572b6", "#c3b017", "#44889d", "#005a53", "#000000", "#121013", "#690dc6", "#4479a1", "#1572b6", "#e34f26", "#121013", "#0f5283" ];

const skillsBasic = ['Java', 'Python', 'JDT', 'Spring', 'Node.js', 'Apache Maven', 'Firebase', 'MongoDB', 'MariaDB', 'Canva', 'Postman', 'GitLab', 'Docker'];

const colorsBasic = ["#ed8b00", "#3670a0", "#000000", "#6db33f", "#6da55f", "#c71a36", "#039be5", "#4ea94b", "#4479a1", "#1572b6", "#e34f26", "#121013", "#0f5283", "#e34f26" ];

export default function Skills() {
  return (
    <div className="general_section">
      <div className="contentSkills">
        <div className="contentSkillsUno">
          <div>
            <p>Tecnologías de conocimiento básico - intermedio</p>
          </div>
          <div className="contentSkillsBasicPlus">
            {skillsBasicPlus.map((skill, index) => (
              <div key={index} style={{ backgroundColor: colorsBasicPlus[index % colorsBasicPlus.length] }}>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="contentSkillsDos">
          <div>
            <p>
              Tecnologías de conocimiento básico o que he probado alguna vez
            </p>
          </div>
          <div className="contentSkillsBasic">
            {skillsBasic.map((skill, index) => (
              <div key={index} style={{ backgroundColor: colorsBasic[index % colorsBasic.length] }}>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
