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

    // fetch and set the targetted video's data.
    const findVideo = async () => {
        const videoData = await getVideo(videoId);
        setVideo(videoData);
    };

    useEffect(() => {
        scrollToTop();
        video && findVideo();
    }, [videoId]);

    useEffect(() => {
        // fetch and initialize all video data.
        const fetchVideos = async () => {
            const videosData = await getVideos();
            setVideos(videosData);

            findVideo();
        };

        fetchVideos();
    }, []);

    const nextVideos = videos.filter(({ id }) => id !== video?.id);

    return (
        <main className="main">
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
