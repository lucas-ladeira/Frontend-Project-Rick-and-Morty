import "./styles.css";

export const SearchButton = ({ onClick }) => {
    return (
        <div className="container-search-button">
            <button className={"searchButton"} onClick={onClick}>
                Search
            </button>
        </div>
    );
};