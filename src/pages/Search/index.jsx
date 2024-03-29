import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import logo from "../../assets/logo.png";
import { SearchBar } from "../../components/SearchBar";
import { SearchButton } from "../../components/Button";
import { CharacterCard } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { Pagination } from "../../components/Pagination";
import { CharacterModal } from "../../components/Modal";

export const Search = () => {
    const { name, page } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState("");
    // const [selectCharacter, setSelectCharacter] = useState();
    // const [searchResults, setSearchResults] = useState([]);
    const [searchInfo, setSearchInfo] = useState(name);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            window.location.href = `/search/${encodeURIComponent(
                searchInfo
            )}/${newPage}`;
        }
    };

    const fetchData = useCallback(
        async (term) => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:5000/search?name=${term}&page=${page}`
                );
                setData(response.data.items);
                setLoading(false);
                setTotalPages(response.data.total_page);
            } catch (error) {
                console.log("Error fetch data");
            }
        },
        [page]
    );

    const handleBtnClick = useCallback(() => {
        navigate(`/search/${encodeURIComponent(searchInfo)}/1`);
    }, [searchInfo, navigate]);

    useEffect(() => {
        setLoading(true);
        setSearchInfo(name);
        fetchData(name);
    }, [name, fetchData]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className="search-container">
                <img src={logo} className={"imgLogo"} alt="Logo Rick & Morty" />
                <form
                    className={"searchElements"}
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleBtnClick();
                    }}
                >
                    {" "}
                    <div>
                        <SearchBar onSearch={setSearchInfo} />
                    </div>
                    <div>
                        <SearchButton onClick={handleBtnClick} />
                    </div>
                </form>
            </div>
            <div className="character-results">
                {data.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                        onClick={() => {
                            setSelectedCharacter(character);
                            setModalOpen(true);
                        }}
                    ></CharacterCard>
                ))}
            </div>

            <div className="pagination-container">
                <Pagination
                    page={Number(page)}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                />
            </div>

            <CharacterModal
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
                character={selectedCharacter}
            />
        </>
    );
};
