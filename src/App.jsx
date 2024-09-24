import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./pages/Video/Video.jsx";
import Header from "./components/Header/Header.jsx";
import Upload from "./pages/Upload/Upload.jsx";
import "./App.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Video />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/video/:videoId" element={<Video />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
