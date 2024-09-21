import Header from "./components/Header/Header.jsx";
import Video from "./components/Video/Video.jsx";
import Comments from "./components/Comments/Comments.jsx";
import NextVideos from "./components/NextVideos/NextVideos.jsx";
import videoDetails from "./data/video-details.json";
import "./App.scss";

const App = () => {
    const currentVideo = videoDetails[0];
    const nextVideos = videoDetails.slice(1, videoDetails.length);

    return (
        <>
            <Header />
            <main>
                <div className="video-container">
                    <Video video={currentVideo} />
                    <Comments comments={currentVideo.comments} />
                </div>
                <NextVideos nextVideos={nextVideos} />
            </main>
        </>
    );
};

export default App;
