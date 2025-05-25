import { useEffect } from "react";
import { useLocation } from "react-router-dom";
/** Esta función soluciona el problema de que cuando clickeas en "ver mas" -> en detalle del juego (GameDetails) no aparezca el scroll abajo del todo */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;