import Header from "./components/Header/Header.jsx";
import Video from "./components/Video/Video.jsx";
import Comments from "./components/Comments/Comments.jsx";
import videoDetails from "./data/video-details.json";
import "./App.scss";

const App = () => {
    const video = videoDetails[0];
    console.log(video.comments);

    return (
        <>
            <Header />
            <main>
                <Video video={video} />
                <Comments comments={video.comments} />
            </main>
        </>
    );
};

export default App;
