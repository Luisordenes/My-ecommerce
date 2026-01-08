import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">

          <div className="footer-column">
                <h3 className="footer-title">Nosotros</h3>
                <ul className="footer-list">
                <li><button className="footer-link">Soporte</button></li>
                <li><button className="footer-link">Términos y Condiciones</button></li>
                <li><button className="footer-link">Preguntas Frecuentes</button></li>
                <li><button className="footer-link">Políticas de Reembolsos y Devoluciones</button></li>
                </ul>
          </div>

          <div className="footer-column">
                <h3 className="footer-title">Tiempo de envíos</h3>
                <p>El envío de tu juego puede tardar de 30 minutos a 4 horas dependiendo el juego.</p>
                <p>Horarios de envíos: Todos los días de 12:00 hrs a 21:00 hrs</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

