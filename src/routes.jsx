import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Preview from "./Components/Preview/index";
import Library from "./Components/Library/index";
export const AllRoutes = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/preview" element={<Preview />} />
            </Routes>
        </>
    );
};
