import "./styles.css";
import logo from "../../assets/logo.png";
import { SearchBar } from "../../components/SearchBar";
import { SearchButton } from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const [searchInfo, setSearchInfo] = useState("");
    const [isSearchInfo, setIsSearchInfo] = useState(false);
    const navegate = useNavigate();

    const handleBtnClick = () => {
        if(searchInfo === "") {
            setIsSearchInfo(true);
            return;
        }
        navegate(`/search/${encodeURIComponent(searchInfo)}/1`);
    };

    return (
        <div className={"HomeState"}>
            <img src={logo} className={"imgLogo"} alt="Logo Rick & Morty" />
            <form className={"searchElements"}>
                <SearchBar onSearch={setSearchInfo}/>
                <SearchButton onClick={handleBtnClick}/>
            </form>
        </div>
    );
};