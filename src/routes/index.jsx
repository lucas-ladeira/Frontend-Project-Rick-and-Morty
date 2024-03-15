import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Search } from "../pages/Search";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:name/:page" element={<Search />} />
            </Routes>
        </Router>
    );
};
