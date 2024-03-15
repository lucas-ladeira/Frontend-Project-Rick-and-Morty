import React from "react";
import "./styles.css";

export const SearchBar = ({ onSearch }) => {
    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };
    
    return (
        <div className="text-box-container">
            <input
                name="character"
                className={"textBox"}
                type="text"
                placeholder='Search characters'
                onChange={handleInputChange}
            />
        </div>
    );
};