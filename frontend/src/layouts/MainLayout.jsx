import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import './MainLayout.css'

const titles = {
  '/': "Accueil — L'Escadron du Poil",
  '/galerie': "Galerie — L'Escadron du Poil",
  '/agenda': "Agenda — L'Escadron du Poil",
  '/espace-client': "Espace client — L'Escadron du Poil",
}

function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titles[pathname] || "L'Escadron du Poil"
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="layout">
      <a className="skip-link" href="#contenu-principal">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu-principal" className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
