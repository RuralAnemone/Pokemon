import React from 'react';
import { pokemonImages } from './PokemonData';

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

function PokemonCard({ pokemon }) {
    const mainTypes = Object.keys(colors);
    const pokeTypes = pokemon.types.map(type => type.type.name);
    const type = mainTypes.find(type => pokeTypes.includes(type)) || 'normal';
    const color = colors[type];
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    
    const pokemonImage = pokemonImages.find(img => img.id === pokemon.id);
    const imagePath = pokemonImage ? `/Images/${pokemonImage.image}` : '/Images/placeholder.png';

    return (
        <div className="pokemon" style={{ backgroundColor: color }}>
            <div className="img-container">
                <img 
                    src={`${process.env.PUBLIC_URL}${imagePath}`}
                    alt={name} 
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `${process.env.PUBLIC_URL}/Images/placeholder.png`;
                    }}
                />
            </div>
            <div className="info">
                <span className="number">#{pokemon.id.toString().padStart(3, '0')}</span>
                <h3 className="name">{name}</h3>
                <small className="type">Type: <span>{type}</span></small>
            </div>
        </div>
    );
}

export default PokemonCard;