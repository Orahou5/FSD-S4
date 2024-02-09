export function PokemonSprites({ sprites, startsWith = ""}) {
    return (
        <div className="pokemon-sprites">
            {Object.entries(sprites).map(([key, value]) => {
                if(value == "" || typeof value !== "string" ) {
                    return null;
                }
                if (value && key.startsWith(startsWith)) {
                    return <img key={key} src={value} alt={key} />;
                }
                return null;
            })}
        </div>
    );
}