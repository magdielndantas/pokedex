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

export const getPokemonTypes = async(id: any) =>{
    const data = await doGet(id)
    let types: string = data.types
      .map((poke: any) => poke.type.name)
      .join(", ");

    const aa = types

    return aa
}