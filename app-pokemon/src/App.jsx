import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout.jsx'
import { PokemonList } from './components/PokemonList.jsx'

function App() {
  return (
    <Layout>
      <PokemonList />
    </Layout>
  )
}

export default App
