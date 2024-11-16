import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza al inicio de la página
  }, [pathname]); // Ejecuta cuando la ruta cambia

  return null;
};

export default ScrollToTop;
