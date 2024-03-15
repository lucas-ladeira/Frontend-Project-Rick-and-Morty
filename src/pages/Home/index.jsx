import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.png";
import { SearchBar } from "../../components/SearchBar";
import { SearchButton } from "../../components/Button";

export const Home = () => {
    const [searchInfo, setSearchInfo] = useState("");
    // const [isSearchInfo, setIsSearchInfo] = useState(false);
    const navigate = useNavigate();

    const handleBtnClick = () => {
        if (searchInfo === "") {
            console.log("deu erro");
            return;
        }
        navigate(`/search/${encodeURIComponent(searchInfo)}/1`);
    };

    return (
        <div className={"HomeState"}>
            <img src={logo} className={"imgLogo"} alt="Logo Rick & Morty" />
            <form className={"searchElements"}>
                <SearchBar onSearch={setSearchInfo} />
                <SearchButton onClick={handleBtnClick} />
            </form>
        </div>
    );
};
