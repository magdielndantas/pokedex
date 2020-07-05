import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import NavItem from '../NavItem'

const Nav: React.FC = () => {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = (): void => {
    for (let i = 1; i <= 20; i++) {
      getPokemon(i)
    }
  }

  const getPokemon = async (id: number): Promise<void> => {
    const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon: any = await data.json()
    /*const pokemonType: string = pokemon.types
      .map((poke: any) => poke.type.name)
      .join(`, `)*/

    const pokemonObject = {
      id: pokemon.id,
      name: pokemon.name,
      image: `${pokemon.sprites.front_default}`,
      types: pokemon.types,
    }

    setPokemon(pokemon => [...pokemon, pokemonObject])
  }

  return (
    <Container>
      <div className="gradient"></div>
      {pokemon.length  > 0 ? pokemon.map((p: any) => (
          <NavItem key={p.id}  name={p.name} id={p.id} image={p.image} types={p.types.map((t: any) => (
            <span key={t.id} className={t.type.name}>{t.type.name} </span>
          ))} />
      )) : <span>...</span>}
    </Container>
  )
};

export default Nav