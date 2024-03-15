import "./styles.css";
import loadingCard from "../../assets/loading-card.png";

export const Loading = () => {
    return(
        <>
            <div className={"LoadingState"}>
                <img src={loadingCard} className={"loadingCard"} alt="Loading Card" />
                <span>Loading...</span>
            </div>
        </>
    );
};
