import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import capitalizeFirstLetter from "../store/service/capitalize.jsx";

export function PokemonList() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { name } = useParams();

  const pokemon = [
      "Pikachu",
      "Charizard",
      "Bulbasaur",
      "Squirtle",
      "Jigglypuff",
      "Meowth",
      "Eevee",
      "Snorlax",
      "Mewtwo", 
      "Gyarados"
  ];

  const handleClick = (pokemon) => (e) => {
    e.preventDefault();
    navigate(`/pokemon/${pokemon.toLowerCase()}`);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/pokemon/${search.toLowerCase()}`);
  }

  return (
    <div id="pokemon-list">
      <h3>Pokemons</h3>
        {pokemon.map((p, i) => (
          <button className={`pokemon-item ${p === capitalizeFirstLetter(name.toLowerCase()) ? "pokemon-item-active" : ""}`} onClick={handleClick(p)} key={i}>
            {p}
          </button>
        ))}
        <form onSubmit={handleSearch}>
          <input 
            type="text" 
            className="jump input-pokemon" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Pokemon"
          />
          <button className="pokemon-item" handleClick>Search</button>
        </form>
    </div>
  );
}