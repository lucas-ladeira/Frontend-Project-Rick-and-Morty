import React, { useCallback, useEffect, useState } from "react";
import { Home } from "../Home";
import { CharacterCard } from "../../components/Card";
import axios from "axios";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";

export const Search = () => {
    const [name, page] = useParams();
    const [data, setData] = useState("");
    const [selectCharacter, setSelectCharacter] = useState();
    const [searchResults, setSearchResults] = useState([]);
    const navegate = useNavigate();

    const fetchData = useCallback(async (term) => {
        try {
            const response = await axios.get(
                `http://127.0.0.1:5000/search?name=${term}&page=${page}`
            );
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setData("Error fetching data");
        }
    });

    useEffect(() => {
        fetchData(name)
    },[name, fetchData]);

    return (
        //itens da home
        <div className="app">
            <div className="character-results">
                {data.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                        onClick={() => {
                            setSelectCharacter(character);
                        }}
                    ></CharacterCard>
                ))}
            </div>
        </div>
    );
};
