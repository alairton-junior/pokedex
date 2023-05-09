import { usePokemon } from "../../hooks/usePokemon"

export default function Home() {

    const { pokemons } = usePokemon();
    

    return (
        <>
        <h1>Pokedex</h1>
       { pokemons.map((pokemon) => <h1 key={pokemon.name}>{pokemon.name}</h1>) }
       </>
    )

}