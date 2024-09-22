import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.jsx";
import VideoContent from "./components/VideoContent/VideoContent.jsx";
import NextVideos from "./components/NextVideos/NextVideos.jsx";
import videoDetails from "./data/video-details.json";
import "./App.scss";

const App = () => {
    const [currentVideoId, setCurrentVideoId] = useState(videoDetails[0].id);

    const handleVideoChange = (id) => setCurrentVideoId(id);

    const currentVideo = videoDetails.find(({ id }) => id === currentVideoId);
    const nextVideos = videoDetails.filter(({ id }) => id !== currentVideoId);

    return (
        <>
            <Header />
            <main className="main">
                <VideoPlayer currentVideo={currentVideo} />
                <div className="main__wrapper">
                    <VideoContent currentVideo={currentVideo} />
                    <NextVideos
                        nextVideos={nextVideos}
                        onVideoChange={handleVideoChange}
                    />
                </div>
            </main>
        </>
    );
};

export default App;
