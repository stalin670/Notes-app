import { Route , Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function AllRoutes() {
    return <Routes>
        <Route path="/" element={<HomePage />}></Route>
    </Routes>
}