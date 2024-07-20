import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * ==================
 * | Page d'accueil |
 * ==================
 */

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Aucune page n'est disponible pour le moment car le site est en pleine refonte avec une implémentation en Vite et React. En attendant amusez vous avec ce compteur. Ce que vous regardez actuellement est le contenu du fichier <code>src/App.tsx</code>
        </p>
      </div>
      <p className="read-the-docs">
        Si vous ne savez pas ce qu'est Vite ou React, n'hésitez pas à cliquer sur leurs logos pour en apprendre plus.
      </p>
    </>
  )
}

export default App
