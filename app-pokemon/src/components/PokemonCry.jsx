export function PokemonCry({ cry }) {
    return (
        <audio src={cry} controls />
    );
}