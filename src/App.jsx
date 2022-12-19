import { Route, Routes } from 'react-router-dom';
import './App.css'
import ProtecterRoute from './components/ProtecterRoute';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokedexInfoId from './pages/PokedexInfoId';

function App() {

  return (
    <div className="App">
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
