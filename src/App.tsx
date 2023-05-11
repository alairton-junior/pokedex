import { PokemonProvider } from "./hooks/usePokemon"
import Home from "./pages/Home"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <PokemonProvider>
      <GlobalStyle/>
      <Home/>
    </PokemonProvider>
  )
}

export default App
