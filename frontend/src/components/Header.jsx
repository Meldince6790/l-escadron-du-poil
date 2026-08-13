import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'
import './Header.css'

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/galerie', label: 'Galerie' },
  { to: '/agenda', label: 'Agenda' },
  { to: '/espace-client', label: 'Espace client' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          to="/"
          className="site-header__brand"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="L'Escadron du Poil, toilettage canin et félin itinérant"
            className="site-header__logo"
          />
        </Link>

        <button
          type="button"
          className={`site-header__toggle${menuOpen ? ' is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="navigation-principale"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">
            {menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          </span>
          <span className="site-header__toggle-bar" aria-hidden="true" />
          <span className="site-header__toggle-bar" aria-hidden="true" />
          <span className="site-header__toggle-bar" aria-hidden="true" />
        </button>

        <nav
          id="navigation-principale"
          className={`site-header__nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Navigation principale"
        >
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    isActive
                      ? 'site-header__link is-active'
                      : 'site-header__link'
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
