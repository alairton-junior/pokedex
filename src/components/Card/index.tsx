import { useEffect, useState } from "react";
import { CardProps } from "./types";
import { api } from "../../services/api";
import { capitalize } from "../../utils/capitular";
import { Box } from "./styles";

export default function Card({ name } : CardProps) {

    
    const [ namePokemon, setNamePokemon ] = useState('');

    const [ imagePokemon, setImagePokemon ] = useState('');

    useEffect(() => {
        setNamePokemon(name);

        console.log(name)
        api.get(`pokemon/${name}`)
            .then( (response) => {
                setImagePokemon(response.data.sprites.front_default);
            })
    }, [ namePokemon ])

    
    return (
        <>
        <Box>
        <h2>{capitalize(name)}</h2>
        <img src={imagePokemon} />
        </Box>
        </>
    )
}