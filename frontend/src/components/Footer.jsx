import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <nav aria-label="Informations légales">
          <ul className="site-footer__links">
            <li>
              <a href="#mentions-legales">Mentions légales</a>
            </li>
            <li>
              <a href="#conditions-generales-de-vente">
                Conditions générales de vente
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <p className="site-footer__copy">© 2026 L'Escadron du Poil</p>
      </div>
    </footer>
  )
}

export default Footer
