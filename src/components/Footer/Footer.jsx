import "./Footer.css";
import ButtonFooter from "../Buttons/ButtonFooter";

const footerLinks = [
  "Soporte",
  "Términos y Condiciones",
  "Preguntas Frecuentes",
  "Políticas de Reembolsos y Devoluciones",
];

function Footer() {
  const handleFooterClick = (text) => {
    console.log("Se hizo click en:", text);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-title">Nosotros</h3>
            <ul className="footer-list">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <ButtonFooter text={link} onClick={handleFooterClick} />
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Tiempo de envíos</h3>
            <p>El envío de tu producto estará sujeto a la demanda</p>
            <p>Horarios de envíos: Todos los días de 12:00 hrs a 21:00 hrs</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



