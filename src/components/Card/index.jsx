import React from "react";
import "./styles.css";

export const CharacterCard = ({ character, onClick }) => {
    const isDead = character.status === "Dead";

    return (
        <div className="character-card">
            <img
                src={character.image}
                alt={character.name}
                className={"character-img"}
                data-isDead={isDead}
            />
            <div className={"character-info"}>
                <h2>{character.name}</h2>
                <span>{character.species}</span>
            </div>
        </div>
    );
};
