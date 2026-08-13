import { Link } from 'react-router-dom'
import kida from '../assets/Kida.webp'
import './Accueil.css'

function Accueil() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Prenez soin de leur poil,
          <br />
          sans quitter votre foyer.
        </h1>
        <p className="hero__subtitle">
          Toilettage canin et félin itinérant,
          <br />
          directement à votre domicile.
        </p>
        <p className="hero__services">Nos prestations</p>
        <Link className="button hero__cta" to="/agenda">
          Prendre rendez-vous
        </Link>
      </div>
      <div className="hero__media">
        <img
          src={kida}
          alt="Kida, chien au pelage blanc, allongé dans l'herbe"
        />
      </div>
    </section>
  )
}

export default Accueil
