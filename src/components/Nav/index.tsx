import React, { useState, useEffect, useRef } from 'react'
import { Container } from './styles'
import NavItem from '../NavItem'

const Nav: React.FC = () => {
  const [pokemon, setPokemon] = useState([])
  const sc = useRef(null);
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(()=>{
    window.addEventListener('scroll', scrolling)
    return () => window.removeEventListener('scroll', scrolling)
  }, [])

  function scrolling(){
    if(window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight){
        return
      }
      infinitScroll()
  }


  const infinitScroll = () =>{
    const getLength = pokemon.length
    for (let i = 1; i <= 20; i++){
      let morePokes = getLength + i
      getPokemon(morePokes)
    }
  }

  const fetchData = (): void => {
    for (let i = 1; i <= 20; i++) {
      getPokemon(i)
    }
  }

  const getPokemon = async (id: number): Promise<void> => {
    const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon: any = await data.json()
    const pokemonObject = {
      id: pokemon.id,
      name: pokemon.name,
      image: `${pokemon.sprites.front_default}`,
      types: pokemon.types,
    }

    setPokemon(pokemon => [...pokemon, pokemonObject])
  }

  return (
    <Container ref={sc}>
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