import { Routes, Route } from "react-router-dom";
import {RecipPage} from "../pages/RecipPage.jsx";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/recettes" element={<RecipPage />} />
        </Routes>
    );
}
