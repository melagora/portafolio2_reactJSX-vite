import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Aboutme from "./Aboutme.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import "@/styles/Menu.css";

function Menu() {
  return (
    <BrowserRouter>
      <nav>
        <section className="navbar">
          <ul>
            <Link className="navbarmenu" to="/inicio">
              <div>
                <li>
                  <p>Inicio</p>
                </li>
              </div>
            </Link>

            <Link className="navbarmenu" to="/about_me">
              <div>
                <li>
                  <p>Sobre mi</p>
                </li>
              </div>
            </Link>

            <Link className="navbarmenu" to="/skills">
              <div>
                <li>
                  <p>Habilidades</p>
                </li>
              </div>
            </Link>

            <Link className="navbarmenu" to="/education">
              <div>
                <li>
                  <p>Educación</p>
                </li>
              </div>
            </Link>

            <Link className="navbarmenu" to="/projects">
              <div>
                <li>
                  <p>Proyectos</p>
                </li>
              </div>
            </Link>

            <Link className="navbarmenu" to="/contact">
              <div>
                <li>
                  <p>Contacto</p>
                </li>
              </div>
            </Link>
          </ul>
        </section>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/about_me" element={<Aboutme />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Menu;
