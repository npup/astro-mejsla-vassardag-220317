const API_BASE = "https://pokeapi.co/api/v2/pokemon/";
async function fetchy(url) {
    const response = await fetch(url);
    return response.json();
}
export async function getPokemonList() {
    const data = await fetchy(API_BASE);
    return data.results;
}
export async function getPokemonDetails(pokemon) {
    return fetchy(pokemon.url);
}
