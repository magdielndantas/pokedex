const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const doGet = async(path: any): Promise<any> => {
    const url = `${API_URL}${path}`;
    let data = await fetch(url)
    data = await data.json()

    return data
}

export const getIdFromUrl = (url: any) => {
   const matches = url.match(/\/([0-9]{1,})\//);

   return matches && matches[1] ? matches[1] : null;
}

export const getPokemonImage = (id: any) =>{
    const pokemon = doGet(id)
    //let image = pokemon.sprites.front_default

    return console.log(pokemon)
}