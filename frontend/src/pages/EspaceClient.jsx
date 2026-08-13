import './EspaceClient.css'

function EspaceClient() {
  return (
    <section className="espace-client page">
      <h1 className="page-title">Espace client</h1>
      <p className="page-intro">
        Cet espace accueillera bientôt votre compte. Pour le moment, voici
        les fonctionnalités prévues.
      </p>

      <ul className="espace-client__list">
        <li>
          <h2>Gestion du profil</h2>
          <p>Retrouver et mettre à jour vos informations personnelles.</p>
        </li>
        <li>
          <h2>Gestion des animaux</h2>
          <p>Ajouter vos compagnons et préciser leurs habitudes de toilettage.</p>
        </li>
        <li>
          <h2>Gestion des rendez-vous</h2>
          <p>Consulter, modifier ou suivre vos prochains passages à domicile.</p>
        </li>
      </ul>
    </section>
  )
}

export default EspaceClient
