import React from "react";
import "./styles.css";

export const CharacterModal = ({ character, modalOpen, setModalOpen }) => {
    if (!character || !modalOpen) {
        return;
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="ModalOverlay" onClick={handleCloseModal}>
            <div className="ModalCard">
                <button className="closeBtn" onClick={handleCloseModal}>
                    Close
                </button>
                <div className="ImageBackgroundContainer">
                    <img
                        className="ImageBackground"
                        src={character.image}
                        alt="name"
                    />
                </div>
                
                <div className="ImageContainer">
                    <img src={character.image} alt="name" />

                    <div className="CharacterInfo">
                        <p className="NameInfo">
                            {character.name}
                        </p>
                        <p className="SpeciesInfo">
                            {character.species}
                        </p>
                    </div>
                </div>

                <div className="ModalDescription">
                    <p className="title">ABOUT</p>
                    <p className="titleText">
                        {character.name} is a{" "}
                        {character.gender === "unknown" ||
                        character.gender === ""
                            ? character.species
                            : character.gender}{" "}
                        {character.species}. He is {character.status} and{" "}
                        {character.status === "Alive" ? "well" : "not so well"}.
                    </p>

                    <p className="title">ORIGIN</p>
                    <p className="OriginSubtitle">Planet</p>
                    <p className="SubInformation">{character.origin_name}</p>
                    <p className="title">LOCATION</p>
                    <p className="OriginSubtitle">Planet</p>
                    <p className="SubInformation">{character.location_name}</p>
                </div>
            </div>
        </div>

        // <div className="modal-elements" onClick={handleCloseModal}>
        //     <div className="modal-character">
        //         <div className="character-img-front">
        //             <img
        //                 src={character.image}
        //                 alt={character.name}
        //                 className="character-img-card"
        //             />
        //             {/* <div className="character-img-info">
        //                 <h2>{character.name}</h2>
        //                 <span>{character.species}</span>
        //             </div> */}
        //         </div>
        //         <div className="character-sheet">
        //             <button onClick={handleCloseModal} className="closeBtn">
        //                 Close
        //             </button>
        //             {/* <div className="character-img-bg-element">
        //                 <img
        //                     src={character.image}
        //                     alt={character.name}
        //                     className="character-img-bg"
        //                 />
        //             </div> */}
        //             {/* <div className="character-info">
        //                 <div className="character-about">
        //                     <h3>ABOUT</h3>
        //                     <span>
        //                         Lorem ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem nisi soluta quisquam
        //                         laudantium maxime?
        //                     </span>
        //                 </div>
        //                 <div className="character-origin">
        //                     <h3>ORIGIN</h3>
        //                 </div>
        //                 <div className="character-location">
        //                     <h3>LOCATION</h3>
        //                 </div>
        //             </div> */}
        //         </div>
        //     </div>
        // </div>
    );
};
