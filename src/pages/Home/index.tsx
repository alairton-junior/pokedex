import Card from "../../components/Card";
import { usePokemon } from "../../hooks/usePokemon"
import { Container } from "./styles";

export default function Home() {

    const { pokemons, setCurrentPage, currentPage } = usePokemon();
    
    function handleCurrentPage() {
        setCurrentPage(currentPage + 1);
    }

    return (
        <>
        <h1>Pokedex</h1>
        <h2>{currentPage}</h2>
        <button onClick={handleCurrentPage}>Próximo</button>
        <Container>
            { pokemons.map((pokemon) => <Card key={pokemon.name} name={pokemon.name}/>) }
        </Container>
       </>
    )

}