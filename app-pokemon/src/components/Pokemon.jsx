import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPokemon } from "../store/pokemonSlice.jsx";
import Layout from "./Layout.jsx";
import { PokemonSprites } from "./PokemonSprites.jsx";
import { PokemonCry } from "./PokemonCry.jsx";
import { PokemonList } from "./PokemonList.jsx";
import capitalizeFirstLetter from "../store/service/capitalize.jsx";

export function Pokemon() {
    const { name: oldName } = useParams();
    const name = oldName.toLowerCase();
    const dispatch = useDispatch();
    const {pokemon, status, error} = useSelector((s) => s.pokemon);

    useEffect(() => {
        if(name === "") return;
        const promise = dispatch(fetchPokemon(name));
        return () => {
            console.log("Abort : ", name);
            promise.abort();
        }
    }, [name]);

    if(status === "loading") {
        return <Layout>Loading...</Layout>;
    }
    if(status === "failed") {
        return <Layout>Error: {error}</Layout>;
    }
    if(status === "idle") {
        return (
            <Layout>
                <h2>Idle... {`(Probably an error)`}</h2>
            </Layout>
        );
    }
    if(status !== "succeeded" || Object.keys(pokemon).length === 0) {
        return (
            <Layout>
                <h2>An Error Happened</h2>
            </Layout>
        );
    }

    console.log("Pokemon : ", pokemon);

    return (
        <div>
            <h1>Pokemon</h1>
            <h2>{capitalizeFirstLetter(pokemon.name)} | Pokedex : { pokemon.id }</h2>
            <h2>Weight : {pokemon.weight/10} kg</h2>
            <PokemonSprites sprites={pokemon.sprites} startsWith={"front"} />
            <PokemonSprites sprites={pokemon.sprites} startsWith={"back"} />
            <PokemonCry cry={pokemon.cries.latest} />
            <h3>Types</h3>
            <span className="type">{pokemon.types.map(t => capitalizeFirstLetter(t.type.name)).join(" | ")}</span>
            <h3>Abilities</h3>
            <div className="abilities-grid">
                {pokemon.abilities.map((a, i) => (
                    <span className="ability" key={i}>{capitalizeFirstLetter(a.ability.name)}</span>
                ))}
            </div>
            <h3>Moves</h3>
            <div className="move-grid">
                {pokemon.moves.map((m, i) => (
                    <span className="move" key={i}>{capitalizeFirstLetter(m.move.name)}</span>
                ))}
            </div>
        </div>
    );
}