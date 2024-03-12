import React from "react";
import "./styles.css";

export const CharacterCard = ({ character, onClick}) => {
    // const isDead = character.status === "Dead";

    return (
        <div className="character-card">
            {/* <img 
                src={character.image_url} 
                alt={character.name} 
                className={"characterCard"}
                // data-isDead={isDead}
            /> */}
            <div className="character-info">
                <h2>
                    {character.name}
                </h2>
                <p>
                    {character.sprecies}
                </p>
            </div>
        </div>
    );
};