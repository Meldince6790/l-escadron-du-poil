import kida from '../assets/Kida.webp'
import './Galerie.css'

function Galerie() {
  return (
    <section className="galerie page">
      <h1 className="page-title">Galerie</h1>
      <p className="page-intro">
        Quelques compagnons déjà choyés à domicile. D'autres portraits
        viendront bientôt enrichir cet espace.
      </p>

      <ul className="galerie__grid">
        <li>
          <figure>
            <img
              src={kida}
              alt="Kida, chien au pelage blanc, allongé dans l'herbe"
            />
            <figcaption>Kida</figcaption>
          </figure>
        </li>
        <li>
          <div className="galerie__placeholder">Photo à venir</div>
        </li>
        <li>
          <div className="galerie__placeholder">Photo à venir</div>
        </li>
        <li>
          <div className="galerie__placeholder">Photo à venir</div>
        </li>
      </ul>
    </section>
  )
}

export default Galerie
