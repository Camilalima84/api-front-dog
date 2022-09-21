import { useState } from 'react'
import './App.css'

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Favoritos } from './pages/Favoritos';

function App() {
  const [paginaAtual, setPaginaAtual] = useState('Home');

  return (
    <div className='container'>
      <Header setPaginaAtual={setPaginaAtual} />
      {paginaAtual == "Home" ? <Home /> : <Favoritos />}
    </div>
  )
}

export default App
