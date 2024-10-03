import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import VideoPage from "./pages/VideoPage/VideoPage.jsx";
import UploadPage from "./pages/UploadPage/UploadPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import "./App.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<VideoPage />} />
                <Route path="/upload" element={<UploadPage />} />
                <Route path="/videos/:videoId" element={<VideoPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
