import Layout from "./Layout.jsx";
import { Pokemon } from "./Pokemon.jsx";
import { PokemonList } from "./PokemonList.jsx";

export function PokemonWrapper() {
    return (
        <Layout>
            <div className="pokemon-wrapper">
                <PokemonList />
                <Pokemon />
            </div>
        </Layout>
    );
}