import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Accueil from './pages/Accueil.jsx'
import Agenda from './pages/Agenda.jsx'
import EspaceClient from './pages/EspaceClient.jsx'
import Galerie from './pages/Galerie.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Accueil />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/espace-client" element={<EspaceClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
