import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

import { api } from '../services/api'

interface IPokemon {
    name: string;
    url: string;
}

interface IPokemonProvider {
    children: ReactNode;
}

interface PokemonContextData {
    pokemons: IPokemon[];
    setCurrentPage: Dispatch<SetStateAction<number>>;
    totalPokemons: number;
    currentPage: number;
    
}

const PokemonContext = createContext<PokemonContextData>(
    {} as PokemonContextData
)

export function PokemonProvider({ children } : IPokemonProvider) {

    const [ pokemons, setPokemons ] = useState([]);
    const [ totalPokemons ] = useState(1281);
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ pokemonForPage ] = useState(30);

    useEffect(() => {
        const url = `pokemon?limit=${pokemonForPage}&offset=${currentPage*pokemonForPage}`
        
        api.get(url)
            .then( (response) => setPokemons(response.data.results))
    }, [currentPage])

  



    return (
        <PokemonContext.Provider value={{pokemons, currentPage, setCurrentPage, totalPokemons}}>
            { children }
        </PokemonContext.Provider>
    )
}

export function usePokemon() {
    const context = useContext(PokemonContext)

    return context
}

