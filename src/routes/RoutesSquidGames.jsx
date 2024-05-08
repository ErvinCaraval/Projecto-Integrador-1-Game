import { BrowserRouter, Route, Routes } from "react-router-dom";
import Level2 from "../pages/level2/Level2";
import Login from "../pages/login/Login";

export default function RoutesSquidGames() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/level2" element={<Level2 />} />
            </Routes>
        </BrowserRouter>
    )
}