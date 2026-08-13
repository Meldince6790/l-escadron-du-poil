import { useState } from 'react'
import './Agenda.css'

function Agenda() {
  const [animal, setAnimal] = useState('Kida')
  const [prestation, setPrestation] = useState('Bain & toilettage')
  const [date, setDate] = useState('2026-08-20')
  const [creneau, setCreneau] = useState('14 h 00')

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <section className="agenda page">
      <h1 className="page-title">Prendre rendez-vous</h1>

      <ol className="agenda__steps" aria-label="Étapes de réservation">
        <li>[ 1. Votre animal ]</li>
        <li>[ 2. Prestation ]</li>
        <li>[ 3. Date et heure ]</li>
      </ol>

      <form className="agenda__form" onSubmit={handleSubmit} noValidate>
        <div className="agenda__field">
          <label htmlFor="animal">Votre animal</label>
          <div className="field-box">
            <select
              id="animal"
              name="animal"
              className="field-control field-control--select"
              value={animal}
              onChange={(event) => setAnimal(event.target.value)}
            >
              <option value="Kida">Kida</option>
            </select>
          </div>
        </div>

        <div className="agenda__field">
          <label htmlFor="prestation">Prestation</label>
          <div className="field-box">
            <select
              id="prestation"
              name="prestation"
              className="field-control field-control--select"
              value={prestation}
              onChange={(event) => setPrestation(event.target.value)}
            >
              <option value="Bain & toilettage">Bain & toilettage</option>
            </select>
          </div>
        </div>

        <div className="agenda__field">
          <label htmlFor="date">Date</label>
          <div className="field-box">
            <input
              id="date"
              name="date"
              className="field-control"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
        </div>

        <div className="agenda__field">
          <label htmlFor="creneau">Créneau</label>
          <div className="field-box">
            <select
              id="creneau"
              name="creneau"
              className="field-control field-control--select"
              value={creneau}
              onChange={(event) => setCreneau(event.target.value)}
            >
              <option value="14 h 00">14 h 00</option>
            </select>
          </div>
        </div>

        <div className="agenda__actions">
          <button className="button" type="submit">
            Confirmer le rendez-vous
          </button>
        </div>
      </form>
    </section>
  )
}

export default Agenda
