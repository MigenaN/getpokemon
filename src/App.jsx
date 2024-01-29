import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GetPokemon from './components/GetPokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GetPokemon></GetPokemon>
    </>
  )
}

export default App
