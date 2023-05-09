import { PokemonProvider } from "./hooks/usePokemon"
import Home from "./pages/Home"

function App() {

  return (
    <PokemonProvider>
      <Home/>
    </PokemonProvider>
  )
}

export default App
