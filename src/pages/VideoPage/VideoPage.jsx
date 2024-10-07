import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { scrollToTop } from "../../utils/utils.js";
import { getVideos, getVideo } from "../../services/videos-api.js";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer.jsx";
import VideoContent from "../../components/VideoContent/VideoContent.jsx";
import NextVideos from "../../components/NextVideos/NextVideos.jsx";
import "./VideoPage.scss";

const VideoPage = () => {
    const { videoId } = useParams();
    const [videos, setVideos] = useState([]);
    const [video, setVideo] = useState(null);
    const [error, setError] = useState("");

    // fetch and set the selected video's data.
    const findVideo = async () => {
        const result = await getVideo(videoId);
        if (result.status === 200) {
            setVideo(result.data);
            setError("");
        } else setError(result.data.error);
    };

    useEffect(() => {
        scrollToTop();
        video && findVideo();
    }, [videoId]);

    useEffect(() => {
        // fetch and initialize all video data.
        const fetchVideos = async () => {
            const result = await getVideos();

            if (result.status === 200) {
                setVideos(result.data);
                findVideo();
            } else setError(result.data.error);
        };

        fetchVideos();
    }, []);

    const nextVideos = videos.filter(({ id }) => id !== video?.id);

    return (
        <main className="main">
            {error && <p className="main__error">{error}</p>}
            {video && (
                <>
                    <VideoPlayer video={video} />
                    <div className="main__wrapper">
                        <VideoContent video={video} onVideoUpdate={findVideo} />
                        <NextVideos nextVideos={nextVideos} />
                    </div>
                </>
            )}
        </main>
    );
};

export default VideoPage;
