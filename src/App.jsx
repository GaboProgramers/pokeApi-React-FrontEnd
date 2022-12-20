import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import DarkMode from './components/pokedex/DarkMode';
import ProtecterRoute from './components/ProtecterRoute';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokedexInfoId from './pages/PokedexInfoId';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <DarkMode
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* rutas protejidas */}

        <Route element={<ProtecterRoute />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexInfoId />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
